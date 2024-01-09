import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

enum TypeFormaDate {
  ANNEE_UNIQUEMENT,
  MOIS_UNIQUEMENT,
  MOIS_ANNEE_UNIQUEMENT,
}

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(value: any, formatType: TypeFormaDate): any {
    if (!value) return '';
    switch (formatType) {
      case TypeFormaDate.ANNEE_UNIQUEMENT:
        return this.datePipe.transform(value, 'yyyy');
      case TypeFormaDate.MOIS_ANNEE_UNIQUEMENT:
        return this.datePipe.transform(value, 'MM-yyyy');
      default:
        return value;
    }
  }
}
