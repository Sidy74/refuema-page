import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [ProgressBarComponent],
})
export class ProgressBarModule {
  
}
