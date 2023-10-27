import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      lastName: [''],
      firstName: [''],
      email: [''],
      phone: [''],
      password: [''],
      pwrd: [''],
      userFile: [''],
    });
  }
  onSubmit() {
    console.log(this.signForm.value);
  }
}
