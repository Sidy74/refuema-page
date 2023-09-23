import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppbarComponent } from './appbar/appbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [AppbarComponent],
})
export class AppbarModule {}
