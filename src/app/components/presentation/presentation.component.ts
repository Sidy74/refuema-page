import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.css'],
    standalone: true,
    imports: [NgFor],
})
export class PresentationComponent {
  listArticles = ['!',';',''];
}
