import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
    name: 'customDate',
    standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(value: any, formatType: string): any {
    if (!value) return '';
    switch (formatType) {
      case 'ANNEE_UNIQUEMENT':
        return this.datePipe.transform(value, 'yyyy');
      case 'MOIS_ANNEE_UNIQUEMENT':
        return this.datePipe.transform(value, 'MM-yyyy');
        case 'JOUR_MOIS_ANNEE_UNIQUEMENT':
        return this.datePipe.transform(value, 'dd-MM-yyyy');
      default:
        return value;
    }
  }
}
