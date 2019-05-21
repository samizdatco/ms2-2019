import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { PbItem } from './pbItem';

@Component({
  selector: 'transcript-list',
  template: `
    <div style="display: flex; flex-direction: column">
      <div loading [isLoading]="isLoading"></div>
      <div *ngIf="!isLoading && pbItems && pbItems.length > 1" class="button-row">
        <button (click)="handlePrevClick()" [disabled]="transcriptIndex <= 0">Prev</button>
        <button (click)="handleNextClick()" [disabled]="transcriptIndex >= pbItems.length - 1">Next</button>
      </div>
      <div style="flex: 1;">
        <transcript-word-cloud *ngIf="transcriptUrl" [transcriptUrl]="transcriptUrl"></transcript-word-cloud>
      </div>
    </div>
  `,
  styles: [`
  
  
  `]
})
export class TranscriptListComponent implements OnChanges, OnDestroy {

  @Input() pbItemsObs: Observable<PbItem[]>;
  @Output() clickedItem: EventEmitter<PbItem> = new EventEmitter<PbItem>();

  isLoading: boolean = false;

  transcriptIndex: number = 0;
  transcriptUrl: string = undefined;

  private sub: Subscription;
  pbItems: PbItem[] = [];

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
      this.transcriptIndex = 0;
      this.transcriptUrl = undefined;
      this.sub = this.pbItemsObs.subscribe(
        items => {
          this.pbItems = [...this.pbItems, ...items]
            .filter(x => x.transcriptUrl);
        },
        err => console.error(err),
        () => {
          this.isLoading = false;
          this.transcriptIndex = 0;
          if (this.pbItems.length !== 0) {
            this.clickedItem.next(this.pbItems[0]);
            this.transcriptUrl = this.pbItems[0].transcriptUrl;
          }
        });
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  handleNextClick(): void {
    if (this.transcriptIndex < this.pbItems.length - 1) {
      this.transcriptIndex++;
      this.transcriptUrl = this.pbItems[this.transcriptIndex].transcriptUrl;
      this.clickedItem.next(this.pbItems[this.transcriptIndex]);
    }
  }

  handlePrevClick(): void {
    if (this.transcriptIndex > 0) {
      this.transcriptIndex--;
      this.transcriptUrl = this.pbItems[this.transcriptIndex].transcriptUrl;
      this.clickedItem.next(this.pbItems[this.transcriptIndex]);
    }
  }

}
