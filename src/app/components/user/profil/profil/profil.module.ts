import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfilComponent } from '../profil.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ProfilComponent, EditUserModalComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule, MatInputModule],
})
export class ProfilModule {}
