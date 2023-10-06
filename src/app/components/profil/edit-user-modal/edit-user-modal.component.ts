import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfilComponent } from '../profil.component';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css'],
})
export class EditUserModalComponent {
  constructor(public dialogRef: MatDialogRef<EditUserModalComponent>) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
