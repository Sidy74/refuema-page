import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-mini-mini-card',
  templateUrl: './mini-mini-card.component.html',
  imports: [NgIf],
  styleUrls: ['./mini-mini-card.component.css'],
  standalone: true,
})
export class MiniMiniCardComponent {
  @Input() image!: any;
  @Input() title: string = `Titre d'article`;
  @Input()
  description: SafeHtml = `description is description of article description`;
}
