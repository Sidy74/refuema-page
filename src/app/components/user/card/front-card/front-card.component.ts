import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-front-card',
  templateUrl: './front-card.component.html',
  styleUrls: ['./front-card.component.css'],
})
export class FrontCardComponent {
  image: string =
    'http://localhost:8000/uploads/images/me111-65840f8d4d3e0.jpg';
  @Input() cardRole: String = 'Membre';
  @Input() cardDateDebut!: string;
  @Input() cardDateFin!: string;
  @Input() cardTitre!: string;
  @Input() cardMatricule!: string;
  @Input() cardUserFistName!: string;
  @Input() cardUserLastName!: string;
  @Input() cardSpecialite!: string;
  @Input() cardImage !:string;
}
