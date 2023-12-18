import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { UserService } from 'src/app/core/_services/user/user.service';
import { PasswordValidator } from 'src/app/core/_validator/password.validator';

@Component({
  selector: 'app-edit-user-password',
  templateUrl: './edit-user-password.component.html',
  styleUrls: ['./edit-user-password.component.css'],
})
export class EditUserPasswordComponent implements OnInit {
  editPasswordForm!: FormGroup;
  formControls!: any;
  isLoading: boolean = false;
  HttpErrorMessage: any = null;
  hasChange = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    public loadingService: LoadingService,
    public dialogRef: MatDialogRef<EditUserPasswordComponent>
  ) {}
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

    this.onEditPasswordFormValueChange();
  }

  updatePassword(event: any) {
    const passwords = this.passwordsToFormData();
    this.userService.resteAuthenticatedUserPassword(passwords).subscribe({
      next: (value: any) => {
        console.log(value);
        this.toastService.openSuccess(value.message, 'X');
        this.closeDialog(true);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 401) {
          err.message;
          this.HttpErrorMessage = err.message;
        }
        this.toastService.openError('Mot de passe incorrecte', 'X');
        this.loadingService.isLoading.next(false);
      },
      complete: () => this.loadingService.isLoading.next(false),
    });
  }
  passwordsToFormData() {
    let formData = new FormData();
    formData.append(' old_password', this.formControls['oldPassword'].value);
    formData.append(
      'password',
      this.formControls['pwrdForm'].controls['password'].value
    );
    return formData;
  }

  onEditPasswordFormValueChange() {
    const initialValue = this.editPasswordForm.value;
    this.editPasswordForm.valueChanges.subscribe((value) => {
      this.hasChange = Object.keys(initialValue).some((key) => {
        this.editPasswordForm.value[key] != initialValue[key];
        this.HttpErrorMessage = null;
      });
    });
  }

  closeDialog(data: any) {
    this.dialogRef.close(data);
  }
}
