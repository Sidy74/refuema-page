import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-mini-card',
  templateUrl: './mini-mini-card.component.html',
  styleUrls: ['./mini-mini-card.component.css'],
})
export class MiniMiniCardComponent {
  @Input() image!: string;
  @Input() title: string = `Titre d'article`;
  @Input()
  description: string = `description is description of article description`;
}
