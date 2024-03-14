import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-a-publications',
  standalone: true,
  imports: [NgIf],
  templateUrl: './a-publications.component.html',
  styleUrl: './a-publications.component.css',
})
export class APublicationsComponent {
  dataSource: any = [];
  openAddPublication() {}
}
