import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/core/_services/user-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserTokenService } from 'src/app/core/_services/user-token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formControl: any;
  constructor(
    private router :Router,
    private userAuthService: UserAuthService,
    private fb: FormBuilder,
    private userTokenService: UserTokenService
  ) {}
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
    this.userAuthService.login(formData).subscribe((val) => {

      if (val.token){ this.userTokenService.saveTokenInLocalStorage(val.token);}
      this.router.navigateByUrl('/')

    });
  }
}
