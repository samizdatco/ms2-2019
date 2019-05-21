import { Component, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

import * as d3 from 'd3';

import { Subscription, Observable } from 'rxjs';

import { PbItem } from './pbItem';


interface BubbleData {
  cluster: number;
  radius: number;
  pbItem: PbItem;
}

@Component({
  selector: 'bubbles',
  template: `
    <div style="display: flex; flex-direction: column;">
      <div loading [isLoading]="isLoading"></div>  
      <div #svgContainerElt style="width: 100%; flex: 1;">  
        <svg #svgElt [attr.width]="width" [attr.height]="height"></svg>
      </div>
    </div>
  `
})
export class BubblesComponent implements AfterViewInit, OnChanges {

  @ViewChild('svgContainerElt') svgContainerElt: ElementRef<SVGElement>;
  @ViewChild('svgElt') svgElt: ElementRef<SVGElement>;
  @Input('pbItemsObs') pbItemsObs: Observable<PbItem[]>;
  @Output() clickedItem: EventEmitter<PbItem> = new EventEmitter<PbItem>();
  @Output() hoverItem: EventEmitter<PbItem> = new EventEmitter<PbItem>();

  isLoading: boolean = true;

  width = 960;
  height = 500;
  private readonly padding = 1.5; // separation between same-color circles
  private readonly clusterPadding = 6; // separation between different-color circles
  private readonly maxRadius = 12;

  private sub: Subscription;

  private readonly bubbleRadius = 5;

  private pbItems: PbItem[] = [];

  private d3Force: d3.Simulation<{}, undefined>;
  private nodes: BubbleData[] = [];
  private clusters: BubbleData[] = [];
  private bubbles: d3.Selection<d3.BaseType, BubbleData, SVGGElement, {}>;
  private enteringBubbles: d3.Selection<d3.BaseType, BubbleData, SVGGElement, {}>;
  private updatingBubbles: d3.Selection<d3.BaseType, BubbleData, SVGGElement, {}>;

  private d3Root: d3.Selection<SVGGElement, {}, null, undefined>;

  private hasBeenInited: boolean = false;

  ngAfterViewInit(): void {


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
          this.pbItems = [...this.pbItems, ...items]
            .filter(item => item.genres !== undefined);
        },
        err => console.error(err),
        () => {
          this.draw();
          this.isLoading = false;
        });
    }
  }

  private lazyInitSvg(): void {
    if (this.hasBeenInited) {
      return;
    }
    this.hasBeenInited = true;
    const svgBoundingRect = this.svgContainerElt.nativeElement.getBoundingClientRect();
    this.width = svgBoundingRect.width;
    this.height = svgBoundingRect.height;


    this.d3Force = d3.forceSimulation()
      .force("center", d3.forceCenter())
      .force("collide", d3.forceCollide().radius((d: any) => d.radius + 1.5).iterations(1))
      .force("cluster", alpha => this.forceCluster(alpha))
      .force("gravity", d3.forceManyBody())
      .force("x", d3.forceX().strength(.7))
      .force("y", d3.forceY().strength(.7))
      .on("tick", () => this.tick());

    this.d3Root = d3.select(this.svgElt.nativeElement)
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
  }

  private draw(): void {

    this.lazyInitSvg();

    const genresMap = this.pbItems.reduce((memo, curr) => {
      memo[curr.genres[0]] = true;
      return memo;
    }, {})
    const genres = Object.keys(genresMap);

    const m = genres.length; // number of distinct clusters

    //console.log('genres are', genres);

    const colors = genres.map((genre, idx) => {
      const h = Math.floor(360.0 * (idx / m));
      return d3.color(`hsl(${h}, 100%, 50%)`)
    });

    var color = d3.scaleOrdinal(colors)
      .domain(genres);

    // The largest node for each cluster.
    this.clusters = [];

    this.nodes = this.pbItems.map(item => {
      const firstGenre = item.genres[0]
      const i = genres.indexOf(firstGenre);
      const r = this.bubbleRadius;
      //Math.sqrt((i + 1) / m * -Math.log(Math.random())) * this.maxRadius;
      const d = {
        cluster: i,
        radius: r,
        pbItem: item
      };
      if (!this.clusters[i] || (r > this.clusters[i].radius)) this.clusters[i] = d;
      return d;
    })
    this.d3Force.nodes(this.nodes);

    this.bubbles = this.d3Root.selectAll("circle")
      .data(this.nodes, (d: BubbleData) => {
        return d.pbItem.id;
        //        return ''+Math.random();
      });

    this.enteringBubbles = this.bubbles
      .enter().append("circle")
      .attr("r", function (d) { return d.radius; })
      .style("fill", (d: any) => {
        if (d.pbItem.mediaType === 'Moving Image') {
          return <any>color(d.cluster);
        } else {
          return 'none';
        }
      })
      .style("stroke", (d: any) => <any>color(d.cluster))
      .style("stroke-width", () => 1)
      .on('click', d => this.handleClick(d))
      .on('mouseover', d => this.handleMouseover(d));

    //this.updatingBubbles = this.bubbles.();

    this.bubbles.exit()
      .transition()
      //.on("end", d => console.log('removeing ', d))
      .remove();


    this.d3Force
      .alpha(1)
      .restart();
  }

  private tick() {
    if (!this.bubbles) {
      return;
    }
    this.enteringBubbles
      .attr("cx", (d: any) => {
        if (d.x < (-this.width / 2) + this.bubbleRadius) {
          d.x = (-this.width / 2) + this.bubbleRadius;
        }
        if (d.x > (this.width / 2) - this.bubbleRadius) {
          d.x = (this.width / 2) - this.bubbleRadius;
        }
        return d.x;
      })
      .attr("cy", (d: any) => {
        if (d.y < (-this.height / 2) + this.bubbleRadius) {
          d.y = (-this.height / 2) + this.bubbleRadius;
        }
        if (d.y > (this.height / 2) - this.bubbleRadius) {
          d.y = (this.height / 2) - this.bubbleRadius;
        }
        return d.y;
      });
    this.bubbles
      .attr("cx", (d: any) => {
        if (d.x < (-this.width / 2) + this.bubbleRadius) {
          d.x = (-this.width / 2) + this.bubbleRadius;
        }
        if (d.x > (this.width / 2) - this.bubbleRadius) {
          d.x = (this.width / 2) - this.bubbleRadius;
        }
        return d.x;
      })
      .attr("cy", (d: any) => {
        if (d.y < (-this.height / 2) + this.bubbleRadius) {
          d.y = (-this.height / 2) + this.bubbleRadius;
        }
        if (d.y > (this.height / 2) - this.bubbleRadius) {
          d.y = (this.height / 2) - this.bubbleRadius;
        }
        return d.y;
      });
  }

  private forceCluster(alpha) {
    const nodes = this.nodes;
    const clusters = this.clusters;
    for (var i = 0, n = nodes.length, node, cluster, k = alpha * 1; i < n; ++i) {
      node = nodes[i];
      cluster = clusters[node.cluster];
      node.vx -= (node.x - cluster.x) * k;
      node.vy -= (node.y - cluster.y) * k;
    }
  }

  private handleClick(d3DataPt: any): void {
    d3.event.stopPropagation();
    this.clickedItem.next(d3DataPt.pbItem);
  }

  private handleMouseover(d3DataPt: any): void {
    this.hoverItem.next(d3DataPt.pbItem);
  }

}