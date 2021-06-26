import { ChangeDetectionStrategy, Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-level-bar',
  templateUrl: './level-bar.component.html',
  styleUrls: ['./level-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelBarComponent {
  @Input() startColor: string; // Hexadecimal
  @Input() endColor: string; // Hexadecimal
  @Input() percentage: number; // Between 0 and 1, inclusive

  @ViewChild('levelBar', {static: false}) 
  set el(el: ElementRef) {
    if(!el){
      return;
    }
    // this.renderer.setStyle(el.nativeElement, "background-image", this.getBackgroundCssString());
    // this.renderer.setStyle(el.nativeElement, "background-image", 'blue');
  };

  constructor(private sanitizer: DomSanitizer) { }

  getHexColorSegment(hexCode: string, number: 0 | 1 | 2) {
    return hexCode.slice(number*2, number*2 + 2);
  }

  hexToInt(hex: string) {
    return Number('0x' + hex);
  }

  getColorBetween(start: string, end: string, percentage: number) {
    if(percentage === 1){
      return end;
    }
    if(percentage === 0){
      return start;
    }
    let startInt = this.hexToInt(start);
    let endInt = this.hexToInt(end);
    let distance = Math.abs(endInt-startInt) * (1 - percentage);
    return Math.floor(Math.min(startInt, endInt) + distance).toString(16).toUpperCase();
  }

  getGradientEnd(start: string, end: string, percentage: number) {
    start = start.startsWith('#') ? start.slice(1) : start;
    end = end.startsWith('#') ? end.slice(1) : end;
    let rAverage = this.getColorBetween(this.getHexColorSegment(start, 0), this.getHexColorSegment(end, 0), percentage);
    let gAverage = this.getColorBetween(this.getHexColorSegment(start, 1), this.getHexColorSegment(end, 1), percentage);
    let bAverage = this.getColorBetween(this.getHexColorSegment(start, 2), this.getHexColorSegment(end, 2), percentage);
    return `#${rAverage}${gAverage}${bAverage}`;
  }

  getBackgroundCssString() {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(to right, ${this.startColor}, ${this.getGradientEnd(this.startColor, this.endColor, this.percentage)})`);
  }

}
