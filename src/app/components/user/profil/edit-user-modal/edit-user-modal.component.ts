import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/core/_models/user..models';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css'],
})
export class EditUserModalComponent implements OnInit {
  user!: User;
  constructor(
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    // console.log(this.data);
    this.user = this.data.user;
    console.log('okko');
    console.log(this.user);
  }
  updateUser() {
    this.updateUserToFormData(this.user);
  }
  updateUserToFormData(user: User) {
    const formData = new FormData();
    formData.append('prenom', user.firstName);
    formData.append('nom', user.lastName);
    formData.append('email', user.mail);
    formData.append('telephone', user.photo);
    formData.append('titre', '1');
    return formData;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
