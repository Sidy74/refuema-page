import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { Subscription, generate } from 'rxjs';
import { UserInfos } from 'src/app/core/_models/user..models';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit, OnDestroy {
  userDataSubscription?: Subscription;
  userPhotoSubscription?: Subscription;
  user!: UserInfos;
  user_image: any;
  constructor(
    public dialog: MatDialog,
    private imageService: ImageService,
    private shareUserInfosService: ShareUserInfosService
  ) {}

  ngOnInit(): void {
    this.shareUserInfosService.getUserData().subscribe({
      next: (value) => {
        if (value) {
          this.user = value;
        }
      },
    });

    this.shareUserInfosService.getUserImage().subscribe({
      next: (value) => {
        console.log(value);
        if (value) this.user_image = this.imageService.getImageUrl(value);
        else console.log('no photo in storage');
      },
      error(err) {
        console.log(err);
      },
    });
  }
  updateImage() {
    const dialogRef = this.dialog.open(PhotoModalComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openEditModal() {
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      data: {
        user: this.user,
      },
    });
  }
  ngOnDestroy(): void {
    this.userDataSubscription?.unsubscribe();
    this.userPhotoSubscription?.unsubscribe();
  }
}
