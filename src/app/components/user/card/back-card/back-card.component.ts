import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-back-card',
  templateUrl: './back-card.component.html',
  styleUrls: ['./back-card.component.css']
})
export class BackCardComponent {
  @Input()  cardRole :String ='Carte Membre'; 

}
