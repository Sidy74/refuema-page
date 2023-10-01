import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppbarComponent } from './appbar/appbar.component';
import { RouterModule } from '@angular/router';
import { AppbarAvatarComponent } from './appbar-avatar/appbar-avatar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppbarComponent, AppbarAvatarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [AppbarComponent],
})
export class AppbarModule {}
