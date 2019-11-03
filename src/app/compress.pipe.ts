import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compress'
})
export class CompressPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.toLocaleUpercase()
  }

}
