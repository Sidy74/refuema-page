import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfilComponent } from '../profil.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProfilAvatarComponent } from '../profil-avatar/profil-avatar.component';
import { ProgressBarModule } from '../../../../shared/progress-bar/progress-bar.module';
import { ProfilAvatarModule } from '../profil-avatar/profil-avatar.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ProfilComponent, EditUserModalComponent, PhotoModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ProgressBarModule,
    ProfilAvatarModule,
    MatSelectModule,
  ],
})
export class ProfilModule {}
