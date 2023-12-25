import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';

@Component({
  selector: 'app-edit-user-mail-modal',
  templateUrl: './edit-user-mail-modal.component.html',
  styleUrls: ['./edit-user-mail-modal.component.css'],
})
export class EditUserMailModalComponent implements OnInit {
  editMailFrom!: FormGroup;
  formControls!: any;
  constructor(public loadingService: LoadingService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.editMailFrom = this.fb.group({
      mail: ['', [Validators.email, Validators.required]],
    });
    this.formControls = this.editMailFrom.controls;
  }

  updateMail(event: any) {}
}
