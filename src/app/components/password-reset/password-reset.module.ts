import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetComponent } from './password-reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasswordResetComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [PasswordResetComponent],
})
export class PasswordResetModule {}
