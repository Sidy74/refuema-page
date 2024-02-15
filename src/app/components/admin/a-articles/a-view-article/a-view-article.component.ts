import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-a-view-article',
  standalone: true,
  imports: [],
  templateUrl: './a-view-article.component.html',
  styleUrl: './a-view-article.component.css',
})
export class AViewArticleComponent {
  constructor(
    public dialogRef: MatDialogRef<AViewArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public article: any
  ) {}
}
