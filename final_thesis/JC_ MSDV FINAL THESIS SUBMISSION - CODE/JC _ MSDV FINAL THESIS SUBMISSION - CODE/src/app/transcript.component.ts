import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {pipe, Subscription} from 'rxjs';
import {map} from 'rxjs/operators'; 

import {DataQuery} from './dataQuery';
import {PbItem} from './pbItem';

@Component({
  template: `
    <div class="transcript-container">
      <div *ngIf="currentItem">
        <item-detail [item]="currentItem"></item-detail>
      </div>
      <div *ngIf="transcriptUrl">
        <transcript-word-cloud [transcriptUrl]="transcriptUrl"></transcript-word-cloud>
      </div>
    </div>

  `,
  styles: [`
    .transcript-container {
      height: 100%;
      width: 100%;
      overflow: scroll;
    }
  `]
})
export class TranscriptComponent implements OnInit, OnDestroy {

  currentItem: PbItem = undefined;
  transcriptUrl: string = undefined;

  private subs: Subscription[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataQuery: DataQuery
  ) {}

  ngOnInit(): void {
    //console.log('ini transcript init');
    this.subs = [
      this.route
      .queryParamMap
      .pipe(map(params => {
        const transcriptUrl = params.get('transcriptUrl');
        this.transcriptUrl = transcriptUrl;
        this.getItem(params.get('id'));
      })).subscribe()
    ];
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  private getItem(id: string): void {
    this.dataQuery.getById(id)
      .then(item => {
        this.currentItem = item;
      });
  }

}