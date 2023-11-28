import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login.component';
import { ProgressBarModule } from "../../../shared/progress-bar/progress-bar.module";

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [CommonModule, ReactiveFormsModule, ProgressBarModule]
})
export class LoginModule {}
