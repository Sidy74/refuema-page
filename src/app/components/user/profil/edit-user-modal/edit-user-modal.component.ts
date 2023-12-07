import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css'],
})
export class EditUserModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
