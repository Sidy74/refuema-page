import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/core/_services/images/image.service';

@Component({
  selector: 'app-a-view-article',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, NgIf, MatIconModule],
  templateUrl: './a-view-article.component.html',
  styleUrl: './a-view-article.component.css',
})
export class AViewArticleComponent {
  description!: any;
  image!: any;
  constructor(
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<AViewArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public article: any
  ) {
    this.description = this.sanitizer.bypassSecurityTrustHtml(
      article.article.description
    );
    if (article.article.medias.length !== 0) {
      this.image = this.imageService.getImageUrl(article.article.medias[0].nom);
    } else {
      this.image = null;
    }
  }
  closeModal() {
    this.dialogRef.close();
  }
}
