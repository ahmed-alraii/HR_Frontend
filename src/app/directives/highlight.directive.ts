import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { 

    this.elem.nativeElement.style.color = 'white';
    this.elem.nativeElement.style.fontWeight = 'bolder';
    // this.elem.nativeElement.style.borderBottom = '1px solid blue'
  }

}
