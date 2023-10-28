import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  signForm!: FormGroup;
  ngOnInit(): void {
    this.signForm = this.fb.group({
      lastName: [null, Validators.required],
      firstName: [null, [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      userFile: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.signForm.controls['email']);
  }
  key(x:any){
    console.log(this.signForm.controls['email']);
  }
}
