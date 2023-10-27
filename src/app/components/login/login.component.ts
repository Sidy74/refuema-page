import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/core/_services/user-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private userAuthService: UserAuthService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
    throw new Error('Method not implemented.');
  }

  login() {
    console.log('email' + this.loginForm.contains);

    console.warn(this.loginForm.value);
    this.userAuthService.login();
  }
}
