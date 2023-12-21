import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Titre } from 'src/app/core/_models/titre.model';
import { UserInfos } from 'src/app/core/_models/user..models';
import { LoadingService } from 'src/app/core/_services/loading/loading.service';
import { RegistrationService } from 'src/app/core/_services/registration.service';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { UserService } from 'src/app/core/_services/user/user.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css'],
})
export class EditUserModalComponent implements OnInit {
  user!: UserInfos;
  isLoading: boolean = false;
  updateForm!: FormGroup;
  titres: Array<Titre> = [];
  select: any;

  constructor(
    private fb: FormBuilder,
    public loadingService: LoadingService,
    private toastService: ToastService,
    private userService: UserService,
    private shareUserInfosService: ShareUserInfosService,
    private registrationService: RegistrationService,
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  //Get all titre
  getAllTitres() {
    this.registrationService.getTitre().subscribe({
      next: (titres) => {
        titres.titre.forEach((element: Titre) => {
          this.titres.push(element);
        });
        this.updateForm.controls['titre'].patchValue(
          this.titres.find((titre) => titre.titre === this.user.titre)?.id
        );
      },
      error: (err) => {
        console.log(err);
        this.toastService.openError(
          'Erreur de creation du formulaire, ressayer.',
          'X'
        );
        this.loadingService.isLoading.next(false);
      },
      complete: () =>
        //Loading false requêt is completed
        this.loadingService.isLoading.next(false),
    });
  }

  ngOnInit(): void {
    this.user = this.data.user;
    this.getAllTitres();
    console.log(this.user.titre);

    this.updateForm = this.fb.group({
      lastName: [
        {
          value: this.user.lastName ? this.user.lastName : 'N/A',
          disabled: false,
        },

        [Validators.required, Validators.minLength(3)],
      ],
      firstName: [
        {
          value: this.user.firstName ? this.user.firstName : 'N/A',
          disabled: false,
        },
        [Validators.required, Validators.minLength(3)],
      ],
      mail: [
        { value: this.user.mail ? this.user.mail : 'N/A', disabled: true },
        [Validators.required, Validators.email],
      ],
      phone: [
        {
          value: this.data.user.phone ? this.user.phone : 'N/A',
          disabled: false,
        },
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      titre: ['', [Validators.required]],
      specialite: [
        {
          value: this.user.specialite ? this.user.specialite : 'N/A',
          disabled: false,
        },
        [Validators.required],
      ],
    });
  }

  updateUser() {
    const formData = this.updateUserToFormData();
    this.userService.updateInformations(formData).subscribe({
      next: (value: any) => {
        if (value.user) {
          this.shareUserInfosService.setUserData(
            new UserInfos(
              value.user.prenom,
              value.user.nom,
              value.user.email,
              value.user.telephone,
              value.user.photo,
              value.user.specialite,
              value.user.titre
            )
          );
        }
        this.toastService.openSuccess('Modifition effectue avec succès', '');
        this.closeDialog(true);
      },
      error: (err) => {
        console.log(err);
        this.toastService.openError('Erreur', '');
      },
    });
  }

  updateUserToFormData() {
    const formData = new FormData();
    const formControls = this.updateForm.controls;
    formData.append('prenom', formControls['firstName'].value);
    formData.append('nom', formControls['lastName'].value);
    formData.append('email', formControls['mail'].value);
    formData.append('telephone', formControls['phone'].value);
    formData.append('titre', formControls['titre'].value);
    formData.append('specialite', formControls['specialite'].value);
    return formData;
  }

  closeDialog(data: any) {
    this.dialogRef.close(data);
  }
}
