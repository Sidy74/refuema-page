import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvViewComponent } from '../cv-view/cv-view.component';
import { CvComponent } from '../cv.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [CvViewComponent, CvComponent],
  imports: [CommonModule, MatIconModule, ReactiveFormsModule, MatSliderModule],
})
export class CvModule {}
