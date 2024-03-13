import { Component, Input, OnInit } from '@angular/core';
import { NgIf, SlicePipe } from '@angular/common';
import { CustomDatePipe } from 'src/app/core/_pipes/custom-date/custom-date.pipe';
import { SafeHtml } from '@angular/platform-browser';
import { ImageService } from 'src/app/core/_services/images/image.service';

@Component({
  selector: 'app-mini-article',
  templateUrl: './mini-article.component.html',
  styleUrls: ['./mini-article.component.css'],
  standalone: true,
  imports: [NgIf, SlicePipe],
})
export class MiniArticleComponent implements OnInit {
  constructor(private customDatePipe: CustomDatePipe) {}
  ngOnInit(): void {
    this.cardBodyText = this.cardBodyText.toString().slice(0, 200);
    this.cardDate = this.customDatePipe.transform(
      this.cardDate,
      'JOUR_MOIS_ANNEE_UNIQUEMENT'
    );
  }
  showMoreText = false;
  @Input() cardMedia: any;
  @Input() cardDate: string = '23';
  @Input()
  cardTitle: string = ' RESEAU DES FEMMES ENSEIGNANTES ET ETUDIANTES DU MALI';
  @Input()
  cardBodyText: SafeHtml = ``;

  toggleText() {
    this.showMoreText = !this.showMoreText;
  }
}
