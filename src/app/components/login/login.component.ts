import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/_services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserTokenService } from 'src/app/core/_services/user-token.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, UserInfos } from 'src/app/core/_models/user..models';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from 'src/app/core/_services/loading.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = new User();
  loginForm!: FormGroup;
  formControl: any;
  loadingSubscription$?: Subscription;
  isLoading: boolean = false;
  @Input() erroStatus!: number;

  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService,
    private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private userTokenService: UserTokenService,
    private shareUserInfosService: ShareUserInfosService
  ) {}
  ngOnDestroy(): void {
    this.loadingSubscription$?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadingSubscription$ = this.loadingService.isLoading$.subscribe({
      next: (value) => {
        this.isLoading = value;
      },
      error(err: HttpErrorResponse) {
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
      next: (value: any) => {
        this.userTokenService.login(value.token);
        if (value.user) {
          this.shareUserInfosService.setUserData(
            new UserInfos(
              value.user.prenom,
              value.user.nom,
              value.user.email,
              value.user.telephone,
              value.user.photo
            )
          );
          this.toastService.openSuccess(
            'Vous êtes connecter avec succès ',
            'X'
          );
          this.router.navigateByUrl('/');
        }
      },
      error: (err: HttpErrorResponse) => {
        //Loading false requêt is completed
        this.loadingService.isLoading.next(false);
        this.erroStatus = err.status;
        if (err.status == 401) {
          this.toastService.openError(
            this.formControl['mail'].value + ` n'est pas autoriser.`,
            'X'
          );
        }
      },
    });
  }
}
