import { Component } from '@angular/core';
import { MiniArticleComponent } from '../mini-article/mini-article.component';
import { NgFor } from '@angular/common';
import { ObjectifsComponent } from './objectifs/objectifs.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [
        ObjectifsComponent,
        NgFor,
        MiniArticleComponent,
    ],
})
export class HomeComponent {}
