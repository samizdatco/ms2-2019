import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';

import {Subscription, Observable} from 'rxjs';

import { PbItem } from './pbItem';


// sets the desired orientation for the histogram (vertical/horizontal)
enum Orientation {
  Horizontal,
  Vertical
}

// linked to app.component.html
@Component({
  selector: 'histogram',
  template: `

    <div>{{pbItems.length}} results</div>
    <div class="histogram">
      <svg #svgElt
        [attr.width]="svgWidth"
        [attr.height]="svgHeight"
      ></svg>
    </div>

  `,
  styles: [`
    .histogram {
      width: 100%;
      text-align: left;
    }
  `]
})

// activates angular 'lifecycle methods'
// AfterViewInit is the first time a result shows on the screen
// OnChanges is used when the data changes (on DoSearch)
// OnDestroy might be used for clear button 

export class HistogramComponent implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('svgElt') svgElt: ElementRef<SVGElement>;
  @Input() pbItemsObs: Observable<PbItem[]>;
  @Output() clickedItem: EventEmitter<PbItem> = new EventEmitter<PbItem>();

  svgWidth: number = 0;
  svgHeight: number = 0;
  private margin: {top: number, right: number, bottom: number, left: number};
  private width: number;
  private height: number;
  

  private d3Svg: d3.Selection<SVGGElement, {}, null, undefined>;
  private d3SvgXAxis: any;

  pbItems: PbItem[] = [];
  private pbItemsSub: Subscription;


  private orientation: Orientation = Orientation.Vertical;

  private readonly verticalAxisWidth = 7;

  constructor() {
    this.margin = {top: 10, right: 30, bottom: 30, left: 30};
    this.width = 1000 - this.margin.left - this.margin.right
    this.height = 1000 - this.margin.top - this.margin.bottom;

    this.svgWidth = this.width + this.margin.left + this.margin.right;
    this.svgHeight = this.height + this.margin.top + this.margin.bottom;
  }

  ngOnDestroy(): void {
    if (this.pbItemsSub) {
      this.pbItemsSub.unsubscribe();
    }
  }

  // setting the d3 svg variable so it can start to have things attached to it
  ngAfterViewInit(): void {
    this.d3Svg = d3.select(this.svgElt.nativeElement)
      .append("g")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
  }

  // finds the max number range for the pixels in order to adjust the orientation width/height
  private getDisplayRangeMax(): number {
    return (this.orientation === Orientation.Horizontal) ? this.width : this.height;
  }

  // where should the dots show up based on orientation
  private getBinTranslate(d: any, scale: d3.ScaleLinear<number, number>): string {
    return (this.orientation === Orientation.Horizontal)
      ? `translate(${scale(d.x0)}, ${this.height})`
      : `translate(${this.verticalAxisWidth}, ${scale(d.x0)})`;
  }

  // choosing based on orientation

  // keep track of the max idx.

  private maxIdx = 0;

  private updateSize(): void {
    if (this.orientation === Orientation.Horizontal) {
      this.svgHeight = this.maxIdx * this.radius + this.margin.top + this.margin.bottom;
    } else {
      this.svgWidth = this.maxIdx * this.radius + this.margin.left + this.margin.right;
    }
  }

  private getCircleX(d: any): number {

    if (d.idx > this.maxIdx) {
      this.maxIdx = d.idx;
      this.updateSize();
    }

    return (this.orientation === Orientation.Horizontal)
      ? 0
      : (d.idx * 2 * d.radius - d.radius);
  }

  // choosing based on orientation
  private getCircleY(d: any): number {

    if (d.idx > this.maxIdx) {
      this.maxIdx = d.idx;
      this.updateSize();
    }

    return (this.orientation === Orientation.Horizontal)
      ? (-d.idx * 2 * d.radius - d.radius)
      : 0;
  }

  // choosing the colors 
  private getCircleFill(d: any): string {
    const pbItem = <PbItem>d.pbItem;
    if (pbItem.mediaType === 'Moving Image') {
      return this.getCircleColor(pbItem)
    } else {
      return 'none';
    }
  }

  private getCircleStroke(d: any): string {
    const pbItem = <PbItem>d.pbItem;
    return this.getCircleColor(pbItem);
  }

  private getCircleColor(pbItem: PbItem): string {
    if (pbItem.hasNoDate) {
      return 'purple';
    }
    if (pbItem.mediaType === 'Moving Image') {
      return 'blue'; 
    }
    return 'red';
  }

  private counter = 0;

  private readonly radius = 6;
  private readonly strokeWidth = 1;

  // function to get the data into histogram using bostock example
  private handleDataUpdate(): void {

    // this.counter = 0;

    // for (let i = 0; i < this.pbItems.length; i++) {
    //   console.log('ith is', i, this.pbItems[i].date)
    // }

    // TODO - figure tf out how to re-use elements in proper d3 fashion.
    this.d3Svg.selectAll(".gBin").remove();

    const pbItemDateExtent = d3.extent(this.pbItems, x => x.date);
    const pbItemDateBins = d3.timeYears(
      d3.timeYear.offset(pbItemDateExtent[0],-1),
      d3.timeYear.offset(pbItemDateExtent[1],1));

    const x = d3.scaleLinear()
      .rangeRound([0, this.getDisplayRangeMax()])
      .domain(pbItemDateExtent);

    const histogram = d3.histogram()
      .domain(_ => [x.domain()[0], x.domain()[1]])
      .thresholds(_ => pbItemDateBins.map(x => x.getTime()))
      .value((d: any) => d.date)

    //binning data and filtering out empty bins
    const bins = histogram(<any[]>this.pbItems);

    //g container for each bin
    let binContainer = this.d3Svg.selectAll(".gBin")
      .data(bins);
    binContainer.exit().remove()

    let binContainerEnter = binContainer.enter()
      .append("g")
        .attr("class", "gBin")
        // .attr("year", (d: any) => {
        //   //console.log('year is ', new Date(d.x0).getFullYear())
        //   return new Date(d.x0).getFullYear();
        // })
        .attr("transform", (d: any) => {
          //console.log('adding gbin', new Date(d.x0), x(d.x0));
          return this.getBinTranslate(d, x);
        })

    //need to populate the bin containers with data the first time
    binContainerEnter.selectAll("circle")
        .data((d: any) => d.map((p, i) => {
          //console.log('i is', i, p.date, this.counter++)
          return {
            idx: i,
            pbItem: p,
            radius: this.radius
          };
        }))
      .enter()
      .append("circle")
        .attr("class", "enter")
        .attr("year", (d: any) => d.pbItem.date.getFullYear())
        .attr("cx", d => this.getCircleX(d)) //g element already at correct x pos
        .attr("cy", d => this.getCircleY(d))
        .attr("r", (d: any) => d.radius)
        .attr('fill', (d: any) => this.getCircleFill(d))
        .attr('stroke', (d: any) => this.getCircleStroke(d))
        .attr('stroke-width', (d: any) => this.strokeWidth)
        .on("click", d => this.handleClick(d))
        .on('mouseover', d => this.handleMouseover(d));


    binContainerEnter.merge(<any>binContainer)
        .attr("transform", (d: any) => {
          //console.log('reseting translate for bin', new Date(d.x0).getFullYear(), x(d.x0))
          return this.getBinTranslate(d, x);
        })
        .attr('isreset', (d: any) => {
          return new Date(d.x0).getFullYear();
        })

    //enter/update/exit for circles, inside each container
    let dots = binContainer.selectAll("circle")
        .data((d: any) => d.map((p, i) => {
          return {
            idx: i,
            pbItem: p,
            radius: this.radius
          };
        }))


    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", d => this.getCircleX(d)) //g element already at correct x pos
        .attr("cy", d => this.getCircleY(d))
        .attr("r", (d: any) => d.radius)
      .merge(<any>dots)
        .on("click", d => this.handleClick(d))
        .on('mouseover', d => this.handleMouseover(d));

    if (! this.d3SvgXAxis) {

      if (this.orientation === Orientation.Horizontal) {
        this.d3SvgXAxis = this.d3Svg.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + this.height + ")");
      } else {
        this.d3SvgXAxis = this.d3Svg.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0, 0)");        
      }
    }
    if (this.orientation === Orientation.Horizontal) {
      this.d3SvgXAxis.call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y")));
    } else {
      this.d3SvgXAxis.call(d3.axisLeft(x).tickFormat(d3.timeFormat("%Y")));
    }
  }

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
          this.handleDataUpdate();
        });
      }
    }
  }

  private handleClick(d3DataPt: any): void {
    this.clickedItem.next(d3DataPt.pbItem);
  }

  private handleMouseover(d3DataPt: any): void {
    this.clickedItem.next(d3DataPt.pbItem);
  }

}
