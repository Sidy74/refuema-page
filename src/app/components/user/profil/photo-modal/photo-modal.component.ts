import {
  AfterContentInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserImageData } from 'src/app/core/_interfaces/userImage';
import { LoadingService } from 'src/app/core/_services/loading.service';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { UserService } from 'src/app/core/_services/user/user.service';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.css'],
})
export class PhotoModalComponent implements OnDestroy {
  loadingSubscription$?: Subscription;
  isLoading: boolean = false;
  new_image!: File;

  image: string | ArrayBuffer | null = null;
  isLoadImage: boolean = true;
  constructor(
    public loadingService: LoadingService,
    private shareUserInfosService: ShareUserInfosService,
    private userService: UserService,
    public dialogRef: MatDialogRef<PhotoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserImageData
  ) {}
  ngOnDestroy(): void {
    this.loadingSubscription$?.unsubscribe();
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
  update(): void {
    if (this.new_image) {
      let formData = new FormData();
      formData.append('photo', this.new_image);

      this.userService.updatePhoto(formData).subscribe({
        next: (value) => {
          this.shareUserInfosService.setUserPhoto(value.photo.photo);
        },
        error(err) {
          console.error('Erreur lors de la mise à jour de la photo :', err);
        },
        complete: () => {
          //Loading false requêt is completed
          this.loadingService.isLoading.next(false);
          //close Modal
          this.onNoClick();
        },
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
