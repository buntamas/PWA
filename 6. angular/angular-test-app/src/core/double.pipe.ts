import { Pipe, PipeTransform } from '@angular/core';

//#Pipe - Own pipe
@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {
  transform(value: number) {
    return value * 2;
  }
}
