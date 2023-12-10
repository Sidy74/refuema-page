import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserImageData } from 'src/app/core/_interfaces/userImage';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { UpdateUserPhotoService } from 'src/app/core/_services/update-user-photo.service/update-user-photo.service';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.css'],
})
export class PhotoModalComponent implements OnInit {
  new_image: any;
  user_image: any;

  image: string | ArrayBuffer | null = null;
  isLoadImage: boolean = true;
  constructor(
    private shareUserInfosService: ShareUserInfosService,
    private updateUserPhotoService: UpdateUserPhotoService,
    public dialogRef: MatDialogRef<PhotoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserImageData
  ) {}
  ngOnInit(): void {
    this.user_image = new FormControl();
  }

  loadImage(event: any) {
    let listFiles = event.target.files as FileList;
    if (listFiles.length >= 0) {
      const file = listFiles[0];
      console.log(listFiles);
      this.new_image = file;
      this.isLoadImage = false;
      const reader = new FileReader();
      reader.onload = (e) => (this.image = reader.result);
      reader.readAsDataURL(file);
    }
  }
  update() {
    if (this.new_image) {
      let formData = new FormData();
      console.log(this.new_image.name);
      formData.append('photo', this.new_image.name);
      this.updateUserPhotoService.updatePhoto(formData).subscribe({
        next: (value) => {
          this.shareUserInfosService.setUserPhoto(value.photo.photo);
        },
      });
    }
    return;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
