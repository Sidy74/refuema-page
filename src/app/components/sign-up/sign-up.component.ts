import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

class newUser {
  lastName!: string;
  firstName!: string;
  mail!: string;
  phone!: string;
  password!: string;
  userFile!: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  newuser = new newUser();
  signForm!: FormGroup;
  ngOnInit(): void {
    this.signForm = this.fb.group({
      lastName: [null, Validators.required],
      firstName: [null, [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      password: ['', [Validators.required]],
      userFile: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const formData = new FormData();
    if (this.signForm) {
    }

    console.log(this.signForm);
    formData.append('prenom', this.signForm.controls['firstName'].value);
    formData.append('nom', this.signForm.controls['lastName'].value);
    formData.append('email', this.signForm.controls['mail'].value);
    formData.append('phone', this.signForm.controls['phone'].value);
    formData.append('document[]', this.signForm.controls['userFile'].value);
    formData.append('password', this.signForm.controls['password'].value);
    console.log(
      formData.forEach((element) => {
        console.log(element);
      })
    );
  }
  key(x: any) {
    console.log(this.signForm.controls['email']);
  }
}
