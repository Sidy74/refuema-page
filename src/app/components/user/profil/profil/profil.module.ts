import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfilComponent } from '../profil.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfilComponent, EditUserModalComponent, PhotoModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ProfilModule {}
