import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  max: any;
  min: any;
  visibility: any;
  @ViewChild('input') input: ElementRef;
  @ViewChild('rangeCloud') rangeCloud: ElementRef;
  @ViewChild('cardRangeCloud') cardRangeCloud: ElementRef;
  @ViewChild('quarterRangeCloud') quarterRangeCloud: ElementRef;
  @ViewChild('halfRangeCloud') halfRangeCloud: ElementRef;
  @ViewChild('thirdRangeCloud') thirdRangeCloud: ElementRef;
  @ViewChild('fullRangeCloud') fullRangeCloud: ElementRef;
  range: any = 50;
  cardRange: any = 50;
  quarterRange: any = 50;
  halfRange: any = 50;
  thirdRange: any = 50;
  fullRange: any = 50;

  constructor(private renderer: Renderer2) { }

  coverage() {
    if (typeof this.range === "string" && this.range.length !== 0) {

      return this.range;
    }
    const maxValue = this.input.nativeElement.getAttribute('max');
    const cloudRange = (this.range / maxValue) * 100;
    this.renderer.setStyle(this.rangeCloud.nativeElement, 'left', cloudRange + '%');
  }

  cardCoverage() {
    if (typeof this.range === "string" && this.range.length !== 0) {

      return this.range;
    }
    const maxValue = this.input.nativeElement.getAttribute('max');
    const cloudRange = (this.cardRange / maxValue) * 100;
    this.renderer.setStyle(this.cardRangeCloud.nativeElement, 'left', cloudRange + '%');
  }

  quarterCoverage() {
    if (typeof this.quarterRange === "string" && this.quarterRange.length !== 0) {

      return this.quarterRange;
    }
    const maxValue = this.input.nativeElement.getAttribute('max');
    const cloudRange = (this.quarterRange / maxValue) * 100;
    this.renderer.setStyle(this.quarterRangeCloud.nativeElement, 'left', cloudRange + '%');
  }

  halfCoverage() {
    if (typeof this.halfRange === "string" && this.halfRange.length !== 0) {

      return this.halfRange;
    }
    const maxValue = this.input.nativeElement.getAttribute('max');
    const cloudRange = (this.halfRange / maxValue) * 100;
    this.renderer.setStyle(this.halfRangeCloud.nativeElement, 'left', cloudRange + '%');
  }

  thirdCoverage() {
    if (typeof this.thirdRange === "string" && this.thirdRange.length !== 0) {

      return this.thirdRange;
    }
    const maxValue = this.input.nativeElement.getAttribute('max');
    const cloudRange = (this.thirdRange / maxValue) * 100;
    this.renderer.setStyle(this.thirdRangeCloud.nativeElement, 'left', cloudRange + '%');
  }

  fullCoverage() {
    if (typeof this.fullRange === "string" && this.fullRange.length !== 0) {

      return this.fullRange;
    }
    const maxValue = this.input.nativeElement.getAttribute('max');
    const cloudRange = (this.fullRange / maxValue) * 100;
    this.renderer.setStyle(this.fullRangeCloud.nativeElement, 'left', cloudRange + '%');
  }

}
