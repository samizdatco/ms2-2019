import {Component, Input, SimpleChanges, OnChanges, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Subscription, Observable} from 'rxjs';

import { PbItem } from './pbItem';

interface YearPbItem {
    year: number;
    items: PbItem[];
}

@Component({
    selector: 'table-view',
    template: `
        <div>   
            <div style="text-align: left;">
                <div>
                    <span class="item"
                        [style.background-color]="getCircleBackground({mediaType: 'Moving Image'})"
                        [style.border-color]="getCircleColor({mediaType: 'Moving Image'})"
                    ></span> Moving Image
                </div>
                <div>
                    <span class="item"
                        [style.background-color]="getCircleBackground({mediaType: ''})"
                        [style.border-color]="getCircleColor({mediaType: ''})"
                    ></span> Audio
                </div>
            </div>
            <table style="width: 100%; text-align: left;">
                <tbody>
                    <tr *ngFor="let year of yearPbItems" class="item-row">
                        <td>{{year.year === unknownDateYear ? 'Unknown' : year.year}}</td>
                        <td>
                            <span 
                                *ngFor="let item of year.items"
                                class="item"
                                [style.height.px]="circleRadius"
                                [style.width.px]="circleRadius"
                                [style.border-radius.px]="halfCircleRadius"
                                [style.background-color]="getCircleBackground(item)"
                                [style.border-color]="getCircleColor(item)"
                                (mousemove)="handleHoverItem($event, item)"
                                (click)="handleClickItem($event, item)"
                            >&nbsp;</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    styles: [
        `   tr.item-row td {
                border-top: 1px solid gray;
            }
            .item {
                display: inline-block;
                height: 6px;
                width: 6px;
                border-radius: 3px;
                border-width: 1px;
                background-color: black;
                vertical-align: middle;
                border-style: solid;
            }
        `
    ]
})
export class TableViewComponent implements OnChanges, OnDestroy {

    @Input() pbItemsObs: Observable<PbItem[]>;
    @Output() clickedItem: EventEmitter<PbItem> = new EventEmitter<PbItem>();
    @Output() hoverItem: EventEmitter<PbItem> = new EventEmitter<PbItem>();

    readonly circleRadius = 8;
    readonly halfCircleRadius = this.circleRadius / 2;

    private pbItemsSub: Subscription;
    pbItems: PbItem[] = [];

    yearPbItems: YearPbItem[] = [];

    readonly unknownDateYear = 3000;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['pbItemsObs']) {
          if (this.pbItemsSub) {
            this.pbItemsSub.unsubscribe();
            this.pbItems = [];
          }
          const newItemsObs: Observable<PbItem[]> = changes['pbItemsObs'].currentValue;
          if (newItemsObs) {
            this.pbItemsSub = newItemsObs.subscribe(items => {
              this.pbItems = [...this.pbItems, ...items];
              this.updateData();
            });
          }
        }
      }

    ngOnDestroy(): void {
        if (this.pbItemsSub) {
            this.pbItemsSub.unsubscribe();
        }
    }

    handleHoverItem(e: MouseEvent, item: PbItem): void {
        e.stopPropagation();
        this.hoverItem.next(item);
    }

    handleClickItem(e: MouseEvent, item: PbItem): void {
        e.stopPropagation();
        this.clickedItem.next(item);
    }

    getCircleBackground(pbItem: PbItem): string {
        if (pbItem.mediaType === 'Moving Image') {
            return this.getCircleColor(pbItem)
        } else {
            return 'transparent';
        }
    }

    getCircleColor(pbItem: PbItem): string {
        // Make them all consistently black ... for now. TODO.
        return 'black';
        // if (pbItem.hasNoDate) {
        //   return 'purple';
        // }
        // if (pbItem.mediaType === 'Moving Image') {
        //   return 'blue'; 
        // }
        // return 'red';
      }

    private updateData(): void {
        this.yearPbItems = [];
        const yearMap = new Map<number, PbItem[]>();
        const years = [];
        this.pbItems.forEach(item => {
            const year = item.hasNoDate ? this.unknownDateYear : item.date.getUTCFullYear();

            if (Number.isNaN(year)) {
                //console.log('year is nan', item);
                return;
            }

            if (! yearMap.has(year)) {
                yearMap.set(year, []);
                years.push(year);
            }
            yearMap.get(year).push(item);
        });
        years.sort();
        years.forEach(year => {
            this.yearPbItems.push({
                year: year,
                items: yearMap.get(year).sort((a, b) => a.date.getTime() - b.date.getTime()) 
            });
        });
    }

}