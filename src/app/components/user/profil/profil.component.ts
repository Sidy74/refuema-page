import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  AfterContentInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { Subscription } from 'rxjs';
import { UserInfos } from 'src/app/core/_models/user..models';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { ImageService } from 'src/app/core/_services/images/image.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProfilComponent implements OnDestroy, AfterContentInit {
  userDataSubscription?: Subscription;
  user!: UserInfos;
  user_image: any =
    'https://c0.klipartz.com/pngpicture/613/636/gratis-png-iconos-de-la-computadora-perfil-de-usuario-avatar-masculino-avatar-thumbnail.png';
  constructor(
    public dialog: MatDialog,
    private imageService: ImageService,
    private shareUserInfosService: ShareUserInfosService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngAfterContentInit(): void {
    this.getImage();
    this.getUserInformations();
  }

  getUserInformations() {
    this.shareUserInfosService.getUserData().subscribe({
      next: (value) => {
        if (value) {
          this.user = value;
        }
      },
    });
  }
  get userImage(): any {
    return this.user_image;
  }
  getImage() {
    this.shareUserInfosService.getUserImage().subscribe({
      next: (value) => {
        if (value) this.user_image = this.imageService.getImageUrl(value);
        else console.log('no photo in storage');
      },
      error: (err) => console.log(err),

      complete: () => this.changeDetectorRef.markForCheck(),
    });
  }

  updateImage() {
    const dialogRef = this.dialog.open(PhotoModalComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.getImage();
      this.changeDetectorRef.markForCheck();
      console.log('The dialog was closed');
      console.log(result);
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
  }
}
