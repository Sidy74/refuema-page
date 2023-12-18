import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  AfterContentInit,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { Subscription } from 'rxjs';
import { User, UserInfos } from 'src/app/core/_models/user..models';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { ImageService } from 'src/app/core/_services/images/image.service';
import { NotExpr } from '@angular/compiler';
import { UserService } from 'src/app/core/_services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProfilComponent implements OnDestroy, OnInit {
  userDataSubscription?: Subscription;
  user!: User;
  user_image: any =
    'https://c0.klipartz.com/pngpicture/613/636/gratis-png-iconos-de-la-computadora-perfil-de-usuario-avatar-masculino-avatar-thumbnail.png';

  constructor(
    public dialog: MatDialog,
    private imageService: ImageService,
    private userService: UserService,
    private shareUserInfosService: ShareUserInfosService,
    private changeDetectorRef: ChangeDetectorRef
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

  openEditModal() {
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      data: {
        user: this.user,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.changeDetectorRef.detectChanges();
      }
      console.log('\n after close ');
    });
  }
  ngOnDestroy(): void {
    this.userDataSubscription?.unsubscribe();
  }
}
