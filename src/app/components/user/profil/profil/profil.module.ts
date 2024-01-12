import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfilComponent } from '../profil.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarModule } from '../../../../shared/progress-bar/progress-bar.module';
import { ProfilAvatarModule } from '../profil-avatar/profil-avatar.module';
import { MatSelectModule } from '@angular/material/select';
import { EditUserPasswordComponent } from '../edit-user-password/edit-user-password.component';
import { EditUserMailModalComponent } from '../edit-user-mail-modal/edit-user-mail-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CvModule } from '../../cv/cv/cv.module';

@NgModule({
  declarations: [
    ProfilComponent,
    EditUserModalComponent,
    PhotoModalComponent,
    EditUserPasswordComponent,
    EditUserMailModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ProgressBarModule,
    ProfilAvatarModule,
    MatSelectModule,
    CvModule,
    MatProgressSpinnerModule,
  ],
})
export class ProfilModule {}
