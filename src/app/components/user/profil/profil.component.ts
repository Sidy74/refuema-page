import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';

import { Subscription } from 'rxjs';
import { UserInfos } from 'src/app/core/_models/user..models';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { ImageService } from 'src/app/core/_services/images/image.service';
import { EditUserPasswordComponent } from './edit-user-password/edit-user-password.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EditUserMailModalComponent } from './edit-user-mail-modal/edit-user-mail-modal.component';
import { MatIcon } from '@angular/material/icon';
import { ProfilAvatarComponent } from './profil-avatar/profil-avatar.component';
import { MatTabGroup, MatTab, MatTabContent } from '@angular/material/tabs';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos/share-user-infos.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [ProfilAvatarComponent, MatIcon, MatTabGroup, MatTab, MatTabContent],
})
export class ProfilComponent implements OnDestroy, OnInit {
  userDataSubscription?: Subscription;
  user!: UserInfos;

  user_image: any =
    'https://c0.klipartz.com/pngpicture/613/636/gratis-png-iconos-de-la-computadora-perfil-de-usuario-avatar-masculino-avatar-thumbnail.png';
  test: any;

  constructor(
    public dialog: MatDialog,
    private imageService: ImageService,
    private shareUserInfosService: ShareUserInfosService,
    private changeDetectorRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit(): void {
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

  getImage() {
    this.shareUserInfosService.getUserImage().subscribe({
      next: (value) => {
        if (!value) console.log('Image not found ,url is null');
        this.user_image = this.imageService.getImageUrl(value);
      },
      error: (err) => console.log(err),
      complete: () => this.changeDetectorRef.markForCheck(),
    });
  }

  updateImage() {
    const dialogRef = this.dialog.open(PhotoModalComponent, {
      data: {
        image: this.user_image,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getImage();
      this.changeDetectorRef.detectChanges();
    });
  }

  openEditMail() {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    const dialogRef = this.dialog.open(EditUserMailModalComponent, {
      width: isMobile ? '90vw' : '500px',
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  openEditPassword() {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    const dialogRef = this.dialog.open(EditUserPasswordComponent, {
      width: isMobile ? '90vw' : '500px',
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  openEditModal() {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      data: {
        user: this.user,
      },
      width: isMobile ? '90vw' : '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  ngOnDestroy(): void {
    this.userDataSubscription?.unsubscribe();
  }
}
