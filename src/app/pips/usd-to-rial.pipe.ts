import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToRial'
})
export class UsdToRialPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 0.38 ;
  }

}
