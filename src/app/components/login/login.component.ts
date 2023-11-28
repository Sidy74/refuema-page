import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/_services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserTokenService } from 'src/app/core/_services/user-token.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/_models/user..models';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from 'src/app/core/_services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = new User();
  loginForm!: FormGroup;
  formControl: any;
  soadingSubscription$?: Subscription;
  isLoading: boolean = false;
  @Input() erroStatus!: number;

  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.soadingSubscription$?.unsubscribe();
  }

  ngOnInit(): void {
    this.soadingSubscription$ = this.loadingService.isLoading$.subscribe({
      next: (value) => {
        this.isLoading = value;
      },
      error(err) {
        console.log(err);
      },
    });

    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.formControl = this.loginForm.controls;
  }

  login() {
    let formData = new FormData();
    formData.append('email', this.formControl['mail'].value);
    formData.append('password', this.formControl['password'].value);
    this.loginService.login(formData).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (err: HttpErrorResponse) => {
        this.erroStatus = err.status;
      },
    });
  }
}
