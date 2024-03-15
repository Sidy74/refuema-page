import { trigger, transition, style, animate } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/core/_services/images/image.service';

@Component({
  selector: 'app-a-view-publication',
  standalone: true,
  imports: [NgIf, MatIconModule, MatDialogModule],
  templateUrl: './a-view-publication.component.html',
  styleUrl: './a-view-publication.component.css',
  animations: [
    trigger('slideInBottom', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class AViewPublicationComponent {
  description!: any;
  image!: any;
  constructor(
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<AViewPublicationComponent>,
    @Inject(MAT_DIALOG_DATA) public publication: any
  ) {
    this.description = this.sanitizer.bypassSecurityTrustHtml(
      publication.publication.description
    );
    if (publication.publication.medias.length !== 0) {
      this.image = this.imageService.getImageUrl(
        publication.publication.medias[0].nom
      );
    } else {
      this.image = null;
    }
  }
  closeModal() {
    this.dialogRef.close();
  }
}
