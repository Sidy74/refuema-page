import { NgIf, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomDatePipe } from 'src/app/core/_pipes/custom-date/custom-date.pipe';
import { PublicationService } from 'src/app/core/_services/publication/publication.service';
import { AViewPublicationComponent } from '../a-view-publication/a-view-publication.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { ConfirmDeleteModalComponent } from 'src/app/shared/confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-a-publications-public',
  standalone: true,
  imports: [
    NgIf,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    CustomDatePipe,
    MatChipsModule,
    SlicePipe,
  ],
  templateUrl: './a-publications-public.component.html',
  styleUrl: './a-publications-public.component.css',
})
export class APublicationsPublicComponent {
  dataSource: any = [];
  typeClass: any;
  displayedColumns: string[] = ['articles'];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private publicationService: PublicationService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.getAllPublicationPublic();
  }
  getAllPublicationPublic() {
    this.publicationService.getAllPublicationPublic().subscribe({
      next: (value: any) => {
        if (value) {
          this.dataSource = value.publication;
        }
        console.log(value);
      },
    });
  }

  isSlice(text: string) {
    if (text.length >= 100) {
      return true;
    }
    return false;
  }
  openAddPublication() {
    this.router.navigateByUrl('admin/publication/add');
  }

  detelePublication(id: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      data: {
        title: `Supprimer l'article`,
        message: `Voulez-vous supprimer cet'article ?`,
      },
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.publicationService.deletePublication(id).subscribe({
          next: (value: any) => {
            this.toastService.openSuccess(value.message.toString(), 'x');
            this.getAllPublicationPublic();
          },
          error: (err) => {
            this.toastService.openError(err.message, 'x');
          },
        });
      }
    });
  }

  openViewModal(publication: any) {
    this.dialog.open(AViewPublicationComponent, {
      panelClass: 'full-screen-modal',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',

      data: { publication: publication },
    });
  }
}
