import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvViewComponent } from '../cv-view/cv-view.component';
import { CvComponent } from '../cv.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomDatePipe } from 'src/app/core/_pipes/custom-date/custom-date.pipe';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        CvViewComponent, CvComponent, CustomDatePipe,
    ],
    exports: [],
    providers: [CustomDatePipe],
})
export class CvModule {}
