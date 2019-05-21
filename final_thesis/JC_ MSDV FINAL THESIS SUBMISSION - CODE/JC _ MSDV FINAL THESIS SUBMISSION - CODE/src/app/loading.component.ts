import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'div[loading]',
  template: `
    <div class="balls" style="margin: auto">
      <div></div>
      <div></div>
      <div></div>
    </div>
  `,
  styles: [
    `
      :host {
        margin: 10px 10px 10px 10px;
      }
    `
  ]
})
export class LoadingComponent implements OnChanges {
  @Input('isLoading') isLoading: boolean = false;

  constructor(private readonly elt: ElementRef) {
    this.elt.nativeElement.style.visibility = 'hidden';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading'].currentValue) {
      this.elt.nativeElement.style.visibility = 'visible';
    } else {
      this.elt.nativeElement.style.visibility = 'hidden';
    }
  }
}