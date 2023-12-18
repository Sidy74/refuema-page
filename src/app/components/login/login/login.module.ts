import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login.component';
import { ProgressBarModule } from "../../../shared/progress-bar/progress-bar.module";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [CommonModule, ReactiveFormsModule, ProgressBarModule,RouterModule]
})
export class LoginModule {}
