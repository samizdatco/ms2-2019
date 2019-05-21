import { Injectable } from '@angular/core';

import * as d3 from 'd3';

import {PbItem} from './pbItem';

interface ProducingPartnerLocation {
  producingPartner: string,
  lat: number,
  lng: number
}

@Injectable()
class LocationData {

  private readonly filename = 'assets/Producing_Partners_with_Location.csv';

  private producingPartnerLocationsDefered: Promise<{[s: string]: ProducingPartnerLocation}>;

  constructor() {
    this.producingPartnerLocationsDefered = d3.csv(this.filename, d => {
      return {
        producingPartner: d['Producing Partner'],
        lat: parseFloat(d.Latitude),
        lng: parseFloat(d.Longitude)
      };
    })
    .then(data => {
      const producingPartnerLocations: {[s: string]: ProducingPartnerLocation} = {};
      data.forEach(d => producingPartnerLocations[d.producingPartner] = d);
      return producingPartnerLocations;
    });
  }

  getLocation(pbItem: PbItem): Promise<ProducingPartnerLocation> {
    if (pbItem.creators.length === 0) {
      return Promise.resolve(undefined);
    }
    return this.producingPartnerLocationsDefered.then(producingPartners => {
      for (let i = 0; i < pbItem.creators.length; i++) {
        if (producingPartners[pbItem.creators[i]]) {
          return producingPartners[pbItem.creators[i]];
        }
      }
      return undefined;
    });
  }

}

export {ProducingPartnerLocation, LocationData};
