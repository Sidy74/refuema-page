import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { UserService } from 'src/app/core/_services/user/user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {
  emailForm!: FormGroup;
  formControls: any;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      mail: ['', [Validators.email, Validators.required]],
    });
    // this.formControls = this.emailForm.controls;
  }

  resetPassword() {
    this.userService.resetPassword(this.emailToFormData()).subscribe({
      next(value) {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
        this.loadingService.isLoading.next(false);
      },
      complete: () => this.loadingService.isLoading.next(false),
    });
  }
  emailToFormData() {
    let formData = new FormData();
    formData.append('email', this.emailForm.controls['mail'].value);
    return formData;
  }
}
