// what is shown when a circle result is clicked; will be info panel

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PbItem } from './pbItem';

@Component({
  selector: 'item-detail',
  template: `
    <div class="item-detail-box">
      <div class="info-panel-header serif">
        Entry details
      </div>

      <ng-container *ngIf="item">
        <div class="title">Title: {{item.title}}</div>
        <div *ngIf="!item.hasNoDate" class="date bottom-margin">Date: {{item.date | date}}</div>
        <div *ngIf="item.hasNoDate" class="date bottom-margin">Date: Unknown</div>

        <ng-container *ngIf="item.creators && item.creators.length">
          <div class="creators-header">Creators:</div>
          <div class="creators-list">
            <ul>
              <li *ngFor="let creator of item.creators">
                {{creator}}
              </li>
            </ul>
          </div>
        </ng-container>

        <div class="genres-header">Genres:</div>
        <div *ngIf="item.genres && item.genres.length" class="genres-list">
          <ul>
            <li *ngFor="let genre of item.genres">
              {{genre}}
            </li>
          </ul>
        </div>
        <div class="description-header">Description:</div>
        <div *ngFor="let descriptionRow of item.description"
          class="description"
        >
          {{descriptionRow}}
        </div>
        <div class="catalogLink">
          <a [href]="getUrlFromId(item)" target="_blank">Go to catalog entry....</a>
        </div>
        <div *ngIf="item.transcriptUrl">
          <a class="wordCloudLlink" target="_blank" [routerLink]="['/transcript']" [queryParams]="{id: item.id, transcriptUrl: item.transcriptUrl}" queryParamsHandling="merge">
            Transcript Word Cloud
          </a>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
    .bottom-margin {
      margin-bottom: 13px;
    }

    .description-header {
      font-size: 12px;
    }

    .genres-header {
      font-size: 12px;
    }

    .creators-header {
      font-size: 12px;
    }

    .info-panel-header {
      margin-top: 20px;
      margin-bottom: 15px;
      font-style: italic;
      font-size: 10px;
      text-align: right;
    }

    .title {
      font-size: 14px;
      font-weight: bold;
    }

    .date {
      font-size: 12px;
    }

    .description {
      font-size: 12px;
      text-align: left;
    }

    .catalogLink {
      font-size: 12px;
    }

    .wordCloudLlink {
      font-size: 12px;
    }

    .genres-list {
      text-align: left;
      font-size: 13px;
    }

    .creators-list {
      text-align: left;
      font-size: 13px;
    }

    `
  ]
})
export class ItemDetailComponent implements OnChanges {

  @Input() item: PbItem;

  getUrlFromId(item: PbItem): string {
    return `http://americanarchive.org/catalog/${item.id}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
