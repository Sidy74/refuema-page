import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-modal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './confirm-delete-modal.component.html',
  styleUrl: './confirm-delete-modal.component.css',
})
export class ConfirmDeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmDelete() {
    // Perform the delete operation here
    // and close the dialog after successful deletion
    this.dialogRef.close(true);
  }

  cancelDelete() {
    this.dialogRef.close(false);
  }
}
