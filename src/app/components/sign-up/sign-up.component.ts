import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { RegistrationService } from 'src/app/core/_services/registration.service';

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
  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {}
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

  onSubmit(event: any) {
    const formData = new FormData();
    if (this.signForm) {
    }

    
    formData.append('prenom', this.signForm.controls['firstName'].value);
    formData.append('nom', this.signForm.controls['lastName'].value);
    formData.append('telephone', this.signForm.controls['phone'].value);
    formData.append('email', this.signForm.controls['mail'].value);
    formData.append('password', this.signForm.controls['password'].value);
    formData.append('document[]', this.signForm.controls['userFile'].value);
    // console.log(
    //   formData.forEach((element) => {
    //     console.log(element);
    //   })
    // );
    this.registrationService.registre(formData).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    });
  }
  key(x: any) {
    console.log(this.signForm.controls['email']);
  }
}
