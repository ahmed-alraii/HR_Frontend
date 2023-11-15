import { Directive , ElementRef ,  HostListener , OnChanges} from '@angular/core';

@Directive({
  selector: '[appPositiveValue]'
})
export class PositiveValueDirective {

  constructor(private elem: ElementRef) {
    console.log(this.elem.nativeElement.value);
   }

   @HostListener('window:keyup') ngOnChanges(){

    let value =  +this.elem.nativeElement.value;

    console.log(value > 0);

    if(value <= 0){
      this.elem.nativeElement.style.color = 'red';
      this.elem.nativeElement.style.border = '1px solid red';
    }else{
      this.elem.nativeElement.style.border = '1px solid green';
      this.elem.nativeElement.style.color = 'green';
    }

   }

}
