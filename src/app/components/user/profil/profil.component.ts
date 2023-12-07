import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { Subscription } from 'rxjs';
import { UserInfos } from 'src/app/core/_models/user..models';
import { UpdateUserPhotoService } from 'src/app/core/_services/update-user-photo.service/update-user-photo.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit, OnDestroy {
  userDataSubscription?: Subscription;
  user!: UserInfos;
  constructor(
    public dialog: MatDialog,
    private shareUserInfosService: ShareUserInfosService,
    private updateUserPhotoService: UpdateUserPhotoService
  ) {}

  ngOnInit(): void {
    this.shareUserInfosService.getUserData().subscribe({
      next: (value) => {
        if (value) this.user = value;
      },
    });
  }
  updateImage(image: any) {
    const formData = new FormData();
    formData.append('photo', image);
    this.updateUserPhotoService.updatePhoto(image).subscribe();
  }
  openEditModal() {
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      data: {
        user: this.user,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnDestroy(): void {
    this.userDataSubscription?.unsubscribe();
  }
}
