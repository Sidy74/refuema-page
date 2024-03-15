import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/_services/login/login.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserTokenService } from 'src/app/core/_services/user-token.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, UserInfos } from 'src/app/core/_models/user..models';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
import { UserRole } from 'src/app/core/_helpers/_enums/user-role';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos/share-user-infos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    NgIf,
    ProgressBarComponent,
    ReactiveFormsModule,
    NgClass,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  user!: User;
  loginForm!: FormGroup;
  formControl: any;
  loadingSubscription$?: Subscription;
  isLoading: boolean = false;
  @Input() erroStatus!: number;
  UserRole = UserRole;

  constructor(
    private loginService: LoginService,
    public loadingService: LoadingService,
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
              value.user.photo,
              value.user.specialite,
              value.user.titre
            )
          );

          this.shareUserInfosService.setUserRole(value.user.role[0]);
          this.shareUserInfosService.setUserPhoto(value.user.photo);
          this.toastService.openSuccess(
            'Vous êtes connecter avec succès ',
            'X'
          );
          if (value.user.role[0] == UserRole.Admin) {
            this.router.navigateByUrl('/admin/home');
          } else if (value.user.role[0] == UserRole.User) {
            this.router.navigateByUrl('/');
          } else {
            console.log('Not found user role');
          }
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loadingService.isLoading.next(false);
        this.erroStatus = err.status;
        console.log(err);

        if (err.status == 404) {
          this.toastService.openError(err.error.message, 'X');
        } else if (err.status == 401) {
          this.toastService.openError(err.error.message, 'X');
        }
      },
      complete: () =>
        //Loading false requêt is completed
        this.loadingService.isLoading.next(false),
    });
  }
}
