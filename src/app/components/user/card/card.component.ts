import { Component } from '@angular/core';
import { CardService } from 'src/app/core/_services/card/card.service';
import { ImageService } from 'src/app/core/_services/images/image.service';
import { BackCardComponent } from './back-card/back-card.component';
import { FrontCardComponent } from './front-card/front-card.component';
import { NgxPrintDirective } from 'ngx-print';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: true,
    imports: [
        NgIf,
        NgxPrintDirective,
        FrontCardComponent,
        BackCardComponent,
    ],
})
export class CardComponent {
  isgeneradedCard: boolean = false;
  cardMatricule: string = 'SIdyMATRICLE';
  cardDateFin: string = '23000';
  cardDateDebut: string = '23000';
  cardTitre: string = 'PR';
  cardImage :string=''
  cardUserFistName: string = 'Fatoumata Mohamed Ag';
  cardUserLastName: string = 'Coulibaly';
  cardSpecialite: string = 'Ingénieur Maintenance Réseau infomratique Mali';

  constructor(private cardService: CardService , private imageService :ImageService) {
    this.getCard();
  }
  setCardInfomations(user: any) {
    this.cardMatricule = user.numero_matricule;
    this.cardDateFin = user.fin;
    this.cardDateDebut = user.debut;
    this.cardTitre = user.titre_utilisateur;
    this.cardUserFistName = user.prenom;
    this.cardUserLastName = user.nom;
    this.cardSpecialite = user.specialite;
    this.cardImage = this.imageService.getImageUrl(user.photo)
  }
  getCard() {
    this.cardService.getCard().subscribe({
      next: (value) => {
        console.log(value);
        this.isgeneradedCard = true;
        this.setCardInfomations(value)
      },
      error(err) {
        console.log(err);
      },
    });
  }
  generateCard() {
    this.cardService.generateCard().subscribe({
      next: (value) => {
        console.log(value);
        this.getCard();
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
