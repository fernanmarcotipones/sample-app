import { Pipe, PipeTransform } from '@angular/core';
import { Name } from '../models/user';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(name: Name): string {
    if (!name) {
      return '';
    }

    return `${name.first} ${name.middle ? name.middle : ''} ${name.last}`;
  }

}
