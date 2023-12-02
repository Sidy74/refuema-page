import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [ProgressBarModule, CommonModule, MatIconModule, MatButtonModule],
})
export class SharedModule {}
