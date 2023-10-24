import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import { CardComponent } from '../card.component';
import { FrontCardComponent } from '../front-card/front-card.component';
import { BackCardComponent } from '../back-card/back-card.component';

@NgModule({
  declarations: [CardComponent, FrontCardComponent,BackCardComponent],
  imports: [CommonModule, NgxPrintModule],
})
export class CardModule {}
