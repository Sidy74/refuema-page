import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/core/_validator/password.validator';

@Component({
  selector: 'app-edit-user-password',
  templateUrl: './edit-user-password.component.html',
  styleUrls: ['./edit-user-password.component.css'],
})
export class EditUserPasswordComponent implements OnInit {
  editPasswordForm!: FormGroup;
  formControls!: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.editPasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      pwrdForm: this.fb.group(
        {
          password: ['', [Validators.required]],
          confirmPassword: ['', [Validators.required]],
        },
        { validator: PasswordValidator }
      ),
    });
    this.formControls = this.editPasswordForm.controls;
  }
  updatePassword(event: any) {
    console.log(this.editPasswordForm);
  }
}
