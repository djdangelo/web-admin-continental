import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value) {
      return 'Activo';
    }
    return 'Inactivo';
  }

}
