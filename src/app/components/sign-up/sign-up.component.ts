import { HttpErrorResponse } from '@angular/common/http';
import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Titre } from 'src/app/core/_models/titre.model';
import { TypeDocument } from 'src/app/core/_models/type-document.models';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { RegistrationService } from 'src/app/core/_services/registration.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { PasswordValidator } from 'src/app/core/_validator/password.validator';
import { MatIcon } from '@angular/material/icon';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { NgIf, NgClass, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [
    NgIf,
    ProgressBarComponent,
    ReactiveFormsModule,
    NgClass,
    NgFor,
    MatIcon,
    AsyncPipe,
  ],
})
export class SignUpComponent implements OnInit, OnDestroy, AfterContentInit {
  signForm!: FormGroup;
  formControls: any;
  files!: File[];
  loadingSubscription$?: Subscription;
  isLoading: boolean = false;
  type_documents: Array<TypeDocument> = [];
  titres: Array<Titre> = [];
  message = null;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    public loadingService: LoadingService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngAfterContentInit(): void {
    this.getAllTitres();
    this.getAllTypeDocuements();
  }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required, Validators.email]],
      titre: ['', [Validators.required]],
      specialite: ['', [Validators.required, Validators.maxLength(30)]],
      fileType: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      pwrdForm: this.fb.group(
        {
          password: ['', [Validators.required]],
          confirmPassword: ['', [Validators.required]],
        },
        { validator: PasswordValidator }
      ),
      userFile: ['', [Validators.required]],
    });
    this.formControls = this.signForm.controls;
  }

  ngOnDestroy(): void {
    this.loadingSubscription$?.unsubscribe();
  }
  //Get all type document
  getAllTypeDocuements() {
    this.registrationService.getTypeDocument().subscribe({
      next: (type_documents) => {
        type_documents.type_de_document.forEach((element: TypeDocument) => {
          this.type_documents.push(element);
          this.formControls['fileType'].patchValue(element.id);
        });
      },
      error: (err) => {
        this.toastService.openError(
          'Erreur de recupération des documents',
          'X'
        );
      },
      complete: () =>
        //Loading false requêt is completed
        this.loadingService.isLoading.next(false),
    });
  }

  //Get all titre
  getAllTitres() {
    this.registrationService.getTitre().subscribe({
      next: (titres) => {
        titres.titre.forEach((element: Titre) => {
          this.titres.push(element);
          this.formControls['titre'].patchValue(element.id);
        });
      },
      error: (err) => {
        console.log(err);
        this.toastService.openError(
          'Erreur de creation du formulaire, ressayer.',
          'X'
        );
      },
      complete: () =>
        //Loading false requêt is completed
        this.loadingService.isLoading.next(false),
    });
  }

  setFiles(event: any) {
    this.formControls['userFile'].touched = true;
    this.files = event.target.files;
  }

  onSubmit(event: any) {
    const formData = new FormData();
    if (this.signForm) {
    }
    formData.append('prenom', this.formControls['firstName'].value);
    formData.append('nom', this.formControls['lastName'].value);
    formData.append('email', this.formControls['mail'].value);
    formData.append(
      'password',
      this.formControls['pwrdForm'].controls['password'].value
    );
    formData.append('telephone', this.formControls['phone'].value);
    for (const iterator of this.files) {
      formData.append('document[]', iterator);
    }

    formData.append('titre', this.formControls['titre'].value);

    formData.append('type', this.formControls['fileType'].value);
    formData.append('specialite', this.formControls['specialite'].value);

    // formData.forEach((element) => {
    //   console.log(element);
    // });

    this.registrationService.registre(formData).subscribe({
      next: (value) => {
        this.loadingService.isLoading.next(false);
        this.toastService.openSuccess(
          'Demande effectuée avec succès. Consulter votre boite mail.',
          'X'
        );
        this.router.navigateByUrl('request-make');
      },
      error: (err: HttpErrorResponse) => {
        this.loadingService.isLoading.next(false);
        this.toastService.openError(err.error.message, 'X');
        this.message = err.error.message;
      },
    });
  }
}
