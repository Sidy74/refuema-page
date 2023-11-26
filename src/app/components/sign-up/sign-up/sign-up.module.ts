import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SignUpComponent],
  imports: [

    MatIconModule,
    CommonModule,ReactiveFormsModule
  ]
})
export class SignUpModule { }
