import { Component, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { PbItem } from './pbItem';
import { LocationData, ProducingPartnerLocation } from './locationData';

const mapBoxToken = 'pk.eyJ1Ijoib2tob2JiIiwiYSI6ImNqdmw5MDhjbzEwM3U0OHBmbWRnNXUyMXoifQ.iZC84FcmxwMSl6H09FTqmg';

declare const L: any;
declare const mapboxgl: any;

interface PbItemGeoJsonFeature {
  type: string,
  properties: {
    item: PbItem,
    creator: ProducingPartnerLocation
  },
  geometry: {
    type: string,
    coordinates: number[]
  }
}

@Component({
  selector: '[map-view]',
  template: `
    <div loading [isLoading]="isLoading"></div>
    <div *ngIf="selectedPbItems && selectedPbItems.length > 1" class="button-row">
      <button (click)="handlePrevClick()" [disabled]="currentPbItemIdx <= 0">Prev</button>
      <button (click)="handleNextClick()" [disabled]="currentPbItemIdx >= selectedPbItems.length - 1">Next</button>
    </div>
    <div #mapDiv style="flex: 1; min-height: 1000px; margin-right: 20px;"></div>
  `,
  styles: [`
    :host {
      text-align: left;
      display: flex;
      flex-flow: column;
    }

    .button-row {
      display: flex;
      flex-flow: row;
      text-align: center;
    }
  `]
})
export class MapViewComponent implements AfterViewInit, OnDestroy, OnChanges {

  @ViewChild('mapDiv') mapDiv: ElementRef<HTMLDivElement>;
  @Input() pbItemsObs: Observable<PbItem[]>;
  @Output() clickedItem: EventEmitter<PbItem> = new EventEmitter<PbItem>();

  isLoading: boolean = false;

  private sub: Subscription;
  private pbItems: PbItem[] = [];

  selectedPbItems: PbItem[] = undefined;
  currentPbItemIdx: number = 0;

  private mapObj: any;

  private readonly maxZoomLevel = 15;

  private readonly clusterLayer = 'clusters';
  private readonly clusterCountLayer = 'cluster-counts';
  private readonly unclusteredPointLayer = 'unclustered-point';
  private readonly sourceId = 'creatorLocations';


  private isDrawn: boolean = false;

  constructor(
    private readonly elt: ElementRef,
    private readonly locationData: LocationData) {
    mapboxgl.accessToken = mapBoxToken;
  }

  ngAfterViewInit(): void {
    this.mapObj = new mapboxgl.Map({
      container: this.mapDiv.nativeElement,
      center: [-122.420679, 37.772537],
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 13,
      maxZoom: this.maxZoomLevel
    });
    this.isDrawn = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pbItemsObs']) {
      if (!this.pbItemsObs) {
        return;
      }
      this.isLoading = true;
      if (this.sub) {
        this.sub.unsubscribe();
      }
      this.pbItems = [];
      this.sub = this.pbItemsObs.subscribe(
        items => {
          this.pbItems = [...this.pbItems, ...items];
        },
        err => console.error(err),
        () => {
          this.draw();
          this.isLoading = false;
        });
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private draw(): void {

    if (this.isDrawn) {
      this.mapObj.removeLayer(this.clusterLayer);
      this.mapObj.removeLayer(this.clusterCountLayer);
      this.mapObj.removeLayer(this.unclusteredPointLayer);
      this.mapObj.removeSource(this.sourceId);
    }

    Promise.all(this.pbItems.map(item => this.locationData.getLocation(item)))
      .then(locations => {
        const allFeatures = this.pbItems.reduce((geoJsonFeatures: PbItemGeoJsonFeature[], item, idx) => {
          if (locations[idx]) {
            geoJsonFeatures.push(this.locationToGeoJson(item, locations[idx]));
          }
          return geoJsonFeatures;
        }, []);
        this.addLocationsLayerToMap(allFeatures);
      });
  }

  // https://docs.mapbox.com/mapbox-gl-js/example/cluster/
  private addLocationsLayerToMap(geoJsonFeatures: any[]): void {
    const fullGeoJson = {
      type: 'FeatureCollection',
      features: geoJsonFeatures
    };

    this.mapObj.addSource(this.sourceId, {
      type: 'geojson',
      // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
      // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
      data: fullGeoJson,
      cluster: true,
      clusterMaxZoom: this.maxZoomLevel, // Max zoom to cluster points on
      clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });


    this.mapObj.addLayer({
      id: this.clusterLayer,
      type: "circle",
      source: this.sourceId,
      filter: ["has", "point_count"],
      paint: {
        // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
        // with three steps to implement three types of circles:
        //   * Blue, 20px circles when point count is less than 100
        //   * Yellow, 30px circles when point count is between 100 and 750
        //   * Pink, 40px circles when point count is greater than or equal to 750
        "circle-color": [
          "step",
          ["get", "point_count"],
          "#51bbd6",
          100,
          "#f1f075",
          750,
          "#f28cb1"
        ],
        "circle-radius": [
          "step",
          ["get", "point_count"],
          20,
          100,
          30,
          750,
          40
        ]
      }
    });

    this.mapObj.addLayer({
      id: this.clusterCountLayer,
      type: "symbol",
      source: this.sourceId,
      filter: ["has", "point_count"],
      layout: {
        "text-field": "{point_count_abbreviated}",
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 12
      }
    });

    this.mapObj.addLayer({
      id: this.unclusteredPointLayer,
      type: "circle",
      source: this.sourceId,
      filter: ["!", ["has", "point_count"]],
      paint: {
        "circle-color": "#11b4da",
        "circle-radius": 8,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#fff"
      }
    });

    // inspect a cluster on click
    this.mapObj.on('click', this.clusterLayer, (e: any) => {
      const features = this.mapObj.queryRenderedFeatures(e.point, { layers: [this.clusterLayer] });
      const clusterId = features[0].properties.cluster_id;
      const point_count = features[0].properties.point_count;
      const clusterSource = this.mapObj.getSource(this.sourceId);
      clusterSource.getClusterLeaves(clusterId, point_count, 0, (err, aFeatures) => {
        const isSingleProducer = this.isSingleProducingPartner(aFeatures);
        if (isSingleProducer) {
          this.setPbItemList(this.getPbItemsFromFeatures(aFeatures));
        } else {

          this.mapObj.getSource(this.sourceId).getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) {
              return;
            }
            this.mapObj.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom
            });
          });

        }
      });

    });

    this.mapObj.on('click', 'unclustered-point', (e: any) => {
      const features = this.mapObj.queryRenderedFeatures(e.point, { layers: ['unclustered-point'] });
      this.selectedPbItems = [];

      // XXX - for some reason this json is stringify'd here.
      const jsonStr = features[0].properties.item;
      const item: PbItem = JSON.parse(jsonStr);
      this.clickedItem.next(item);

    });

    this.mapObj.on('mouseenter', this.clusterLayer, () => {
      this.mapObj.getCanvas().style.cursor = 'pointer';
    });
    this.mapObj.on('mouseleave', this.clusterLayer, () => {
      this.mapObj.getCanvas().style.cursor = '';
    });
    this.mapObj.on('mouseenter', 'unclustered-point', () => {
      this.mapObj.getCanvas().style.cursor = 'pointer';
    });
    this.mapObj.on('mouseleave', 'unclustered-point', () => {
      this.mapObj.getCanvas().style.cursor = '';
    });

    const bounds = new mapboxgl.LngLatBounds();
    geoJsonFeatures.forEach(feature => {
      bounds.extend(feature.geometry.coordinates);
    });
    this.mapObj.fitBounds(bounds, { padding: 10 });

    this.isDrawn = true;
  }

  private locationToGeoJson(item: PbItem, location: ProducingPartnerLocation): PbItemGeoJsonFeature {
    return {
      type: 'Feature',
      properties: {
        item: item,
        creator: location
      },
      geometry: {
        type: 'Point',
        coordinates: [location.lng, location.lat]
      }
    };
  }

  private isSingleProducingPartner(geoJsonFeatures: PbItemGeoJsonFeature[]): boolean {
    if (!geoJsonFeatures || geoJsonFeatures.length === 0) {
      return false;
    }
    const first = geoJsonFeatures[0].properties.creator;
    for (let i = 1; i < geoJsonFeatures.length; i++) {
      const next = geoJsonFeatures[i].properties.creator;
      if (!(next.lng === first.lng && next.lat === first.lat)) {
        return false;
      }
    }
    return true;
  }

  private getPbItemsFromFeatures(geoJsonFeatures: PbItemGeoJsonFeature[]): PbItem[] {
    return geoJsonFeatures.map(x => x.properties.item);
  }

  private setPbItemList(items: PbItem[]): void {
    this.selectedPbItems = items;
    this.currentPbItemIdx = 0;
    this.clickedItem.next(this.selectedPbItems[this.currentPbItemIdx]);
  }

  handleNextClick(): void {
    if (this.currentPbItemIdx < this.selectedPbItems.length - 1) {
      this.currentPbItemIdx++;
      this.clickedItem.next(this.selectedPbItems[this.currentPbItemIdx]);
    }
  }

  handlePrevClick(): void {
    if (this.currentPbItemIdx > 0) {
      this.currentPbItemIdx--;
      this.clickedItem.next(this.selectedPbItems[this.currentPbItemIdx]);
    }
  }

}
