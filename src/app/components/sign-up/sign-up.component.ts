import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Titre } from 'src/app/core/_models/titre.model';
import { TypeDocument } from 'src/app/core/_models/type-document.models';
import { LoadingService } from 'src/app/core/_services/loading.service';
import { RegistrationService } from 'src/app/core/_services/registration.service';
import { PasswordValidator } from 'src/app/core/_validator/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  signForm!: FormGroup;
  formControls: any;
  files: any;
  loadingSubscription$?: Subscription;
  isLoading: boolean = false;
  selectedTypeDocuments!: TypeDocument;
  type_documents!: Array<TypeDocument>;
  selectedTitre!: Titre;
  titres!: Array<Titre>;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private loadingService: LoadingService
  ) {}
  ngOnDestroy(): void {
    this.loadingSubscription$?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadingSubscription$ = this.loadingService.isLoading$.subscribe({
      next: (value) => {
        this.isLoading = value;
      },
      error(err) {
        console.log(err);
      },
    });

    //Get all titre
    this.registrationService.getTitre().subscribe((titres) => {
      this.titres = titres.titre;
      this.selectedTitre = this.titres[0];
      console.log(this.titres);
    });

    //Get all type document
    this.registrationService.getTypeDocument().subscribe((type_documents) => {
      this.type_documents = type_documents.type_de_document;
      this.selectedTypeDocuments = this.type_documents[0];
      console.log(this.type_documents);
    });

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
      formData.append('document[]', iterator.name);
    }

    formData.append('titre', this.formControls['titre'].value);

    formData.append('type', this.formControls['fileType'].value);
    formData.append('specialite', this.formControls['specialite'].value);

    // formData.forEach((element) => {
    //   console.log(element);
    // });

    this.registrationService.registre(formData).subscribe({
      next(value) {},
      error(err) {
        console.log(err);
      },
    });
  }
}
