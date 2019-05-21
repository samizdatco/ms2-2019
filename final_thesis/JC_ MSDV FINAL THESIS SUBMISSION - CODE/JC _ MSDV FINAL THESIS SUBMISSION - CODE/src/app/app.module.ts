// configures all of the angular components that are being used

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HistogramComponent} from './histogram.component';
import {ItemDetailComponent} from './itemDetail.component';
import {TranscriptWordCloudComponent} from './transcriptWordCloud.component';
import {TranscriptComponent} from './transcript.component';
import {SearchComponent} from './search.component';
import {BubblesComponent} from './bubbles.component';
import {TableViewComponent} from './tableView.component';
import {MapViewComponent} from './mapView.component';
import {LoadingComponent} from './loading.component';
import {TranscriptListComponent} from './transcriptList.component';
import {LandingComponent} from './landing.component';
import {DataQuery} from './dataQuery';
import {LocationData} from './locationData';


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'transcript', component: TranscriptComponent }
];

const routeConfig = {
  useHash: true
};

@NgModule({
  declarations: [
    AppComponent,
    HistogramComponent,
    ItemDetailComponent,
    TranscriptWordCloudComponent,
    SearchComponent,
    TranscriptComponent,
    BubblesComponent,
    TableViewComponent,
    MapViewComponent,
    LoadingComponent,
    TranscriptListComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, routeConfig)
  ],
  providers: [
    DataQuery,
    LocationData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
