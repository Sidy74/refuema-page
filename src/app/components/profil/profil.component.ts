import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent {
  constructor(public dialog: MatDialog) {}

  openEditModal() {
    const dialogRef = this.dialog.open(EditUserModalComponent,{ panelClass: 'edit_user_modal' });

    // dialogRef.afterClosed().subscribe(result => {
    // console.log(`Dialog result: ${result}`);
    // });
  }
  openImageModal() {}
}
