// what is shown when a circle result is clicked; will be info panel

import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { Observable, defer, pipe, of, empty, Subscription } from 'rxjs'; // rxjs is allowing for the repeated data query in getItems
import { map, concat, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import * as d3 from 'd3';


import * as d3Cloud from 'd3-cloud';


import { PbItem } from './pbItem';

interface TranscriptPart {
  end_time: string,
  id: number,
  speaker_id: number,
  start_time: string,
  text: string
}

interface TranscriptSpeaker {
  // TODO.
}

interface Transcript {
  id: number
  language: string,
  parts: TranscriptPart[],
  speakers: TranscriptSpeaker[]
}


@Component({
  selector: 'transcript-word-cloud',
  template: `
    <div loading [isLoading]="isLoading"></div>    
    <div [style.visibility]="isLoading ? 'hidden' : 'visible'">
      <svg #wordCloudSvg [attr.width]="layoutSize[0]" [attr.height]="layoutSize[1]"></svg>
    </div>
  `,
  styles: [
    `

    `
  ]
})
export class TranscriptWordCloudComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('wordCloudSvg') wordCloudSvg: ElementRef<SVGElement>;
  @Input() transcriptUrl: string;

  isLoading: boolean = true;

  private transcriptSub: Subscription;
  private d3SvgElt: any;

  readonly layoutSize = [1000, 1000];
  layout: any;

  constructor(private readonly changeRef: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.d3SvgElt = d3.select(this.wordCloudSvg.nativeElement)
      .append("g")
      .attr("transform", "translate(" + this.layoutSize[0] / 2 + "," + this.layoutSize[1] / 2 + ")")
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('the world cloud change', changes);
    this.isLoading = true;
    if (this.transcriptSub) {
      this.transcriptSub.unsubscribe();
    }

    if (!this.transcriptUrl) {
      return;
    }

    const isText = this.transcriptUrl.endsWith('txt');
    const ajaxConfig = {
      url: this.transcriptUrl,
      responseType: isText ? 'text' : 'json'
    };
    //this.d3SvgElt.selectAll("text").remove();
    this.transcriptSub = ajax(ajaxConfig).subscribe(x => {
      this.isLoading = false;
      //console.log('got transcript', this.transcriptUrl, ajaxConfig, x);
      const wordCounts = isText
        ? this.getWordCountsFromRawText(x.response)
        : this.getWordCountsFromTranscriptJson(x.response);
      //console.log('counts', wordCounts);
      this.setLayout(wordCounts);
      this.layout.start();

      this.changeRef.detectChanges();
      this.changeRef.markForCheck();
    });

  }

  ngOnDestroy(): void {
    if (this.transcriptSub) {
      this.transcriptSub.unsubscribe();
    }
  }

  private setLayout(wordCounts: { [w: string]: number }): void {
    this.layout = d3Cloud()
      .size(this.layoutSize)
      .words(Object.keys(wordCounts).map(word => {
        return {
          text: word,
          size: Math.floor(Math.sqrt(wordCounts[word] * 100))
        }
      }))
      .padding(5)
      //.spiral('archimedean')
      .rotate(function () { return 0; })
      .font("Lato")
      .fontSize(function (d) { return d.size; })
      .on("end", this.draw.bind(this));
  }

  private minWordLength = 5;

  private getWordCountsFromTranscriptJson(transcriptResponse: Transcript): { [w: string]: number } {
    const counts: { [w: string]: number } = {};
    return transcriptResponse.parts.reduce((counts, part) => {
      part.text.split(/\s/).forEach(word => {
        if (word.length < this.minWordLength) {
          return;
        }
        if (counts[word]) {
          counts[word]++;
        } else {
          counts[word] = 1;
        }
      });
      return counts;
    }, counts);
  }

  private getWordCountsFromRawText(text: string): { [w: string]: number } {
    const counts: { [w: string]: number } = {};
    text.split(/\s/).forEach(word => {
      if (word.length < this.minWordLength) {
        return;
      }
      if (counts[word]) {
        counts[word]++;
      } else {
        counts[word] = 1;
      }
    });
    return counts;
  }

  private draw(words: any) {

    const cloud = this.d3SvgElt.selectAll("g text")
      .data(words, d => d.text);

    cloud
      .enter().append("text")
      .style("font-size", d => `${d.size}px`)
      .style("font-family", "Lato")
      .attr("text-anchor", "middle")
      .attr("transform", d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
      .text(d => d.text);

    cloud
      .transition()
      .duration(600)
      .style("font-size", d => `${d.size}px`)
      .attr("transform", d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
      .style("fill-opacity", 1);

    cloud.exit()
      .transition()
      .duration(200)
      .style('fill-opacity', 1e-6)
      .attr('font-size', 1)
      .remove();
  }

}
