import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { MatButton } from '@angular/material/button';
import { ProgressBarComponent } from '../../../../shared/progress-bar/progress-bar.component';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
    selector: 'app-edit-user-mail-modal',
    templateUrl: './edit-user-mail-modal.component.html',
    styleUrls: ['./edit-user-mail-modal.component.css'],
    standalone: true,
    imports: [
        MatDialogTitle,
        NgIf,
        ProgressBarComponent,
        MatDialogContent,
        ReactiveFormsModule,
        NgClass,
        MatDialogActions,
        MatButton,
        MatDialogClose,
        AsyncPipe,
    ],
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
