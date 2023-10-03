import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-front-card',
  templateUrl: './front-card.component.html',
  styleUrls: ['./front-card.component.css'],
})
export class FrontCardComponent {
  @Input() cardRole: String = 'Membre';
  @Input() cardIdentifiant: String = '123456789MSREUMA£#!sjh';
  @Input() cardUserFistName: String = 'Fatoumata Mohamed Ag';
  @Input() cardUserLastName: String = 'Coulibaly';
}
