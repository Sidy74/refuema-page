import { HttpErrorResponse } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';
import { UserInfos } from 'src/app/core/_models/user..models';
import { CustomDatePipe } from 'src/app/core/_pipes/custom-date/custom-date.pipe';
import { CvService } from 'src/app/core/_services/cv/cv.service';
import { ImageService } from 'src/app/core/_services/images/image.service';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { years } from 'src/app/shared/_utils/years';
import { CvViewComponent } from './cv-view/cv-view.component';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatIcon } from '@angular/material/icon';
import { NgIf, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgFor,
        MatIcon,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepicker,
        MatSlider,
        MatSliderThumb,
        NgSwitch,
        NgSwitchCase,
        CvViewComponent,
    ],
})
export class CvComponent implements AfterContentInit {
  years = years;
  haveCV: boolean = false;
  editMode: boolean = false;
  isFullScreen = false;
  isLoading = false;
  userInfos!: UserInfos;
  userImage!: string;
  cvForm!: FormGroup;
  cvFormControls: any;
  startDatePicker: any;
  currentCvId!: number;

  constructor(
    private fb: FormBuilder,
    private cvService: CvService,
    private shareUserInfosService: ShareUserInfosService,
    private imageService: ImageService,
    private customDatePipe: CustomDatePipe,
    private toastService: ToastService
  ) {
    this.cvForm = this.fb.group({
      informationForm: this.fb.group({
        lastName: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8),
          ],
        ],
        mail: ['', [Validators.required]],
        specialite: ['', [Validators.required]],
      }),
      profileForm: this.fb.group({
        title: ['', [Validators.maxLength(100)]],
        description: [
          { value: '', disabled: false },
          [Validators.maxLength(100)],
        ],
      }),
      experiences: this.fb.array([]),
      projects: this.fb.array([]),
      competences: this.fb.array([]),
      formations: this.fb.array([]),
      langues: this.fb.array([]),
      hobbies: this.fb.array([]),
      links: this.fb.array([]),
    });
    this.cvFormControls = this.cvForm.controls;
  }
  ngAfterContentInit(): void {
    this.shareUserInfosService.getUserImage().subscribe({
      next: (value) => {
        this.userImage = this.imageService.getImageUrl(value);
      },
    });
    this.shareUserInfosService.getUserData().subscribe({
      next: (value) => {
        if (value) this.userInfos = value;
        this.setUserValue();
      },
      error(err) {
        console.log(err);
      },
    });
    this.cvService.getCV().subscribe({
      next: (value: any) => {
        console.log(value);
        this.haveCV = !this.haveCV;
        if (value.cv.description) {
          this.cvFormControls['profileForm'].controls['description'].patchValue(
            value.cv.description
          );
        }
        if (value.cv.id) {
          this.currentCvId = value.cv.id;
        }
        if (value && value.cv && value.cv.experiences) {
          this.experiences = value.cv.experiences;
        }
        if (value && value.cv && value.cv.competences) {
          this.competences = value.cv.competences;
        }
        if (value.cv.langues) {
          this.langues = value.cv.langues;
        }
      },
      error(err) {
        console.log(err);
      },
    });
  }

  // Expériences methodes
  get experiences(): FormArray {
    return this.cvForm.get('experiences') as FormArray;
  }
  set experiences(value: any) {
    // Effacez les contrôles existants
    this.experiences.clear();

    // Itérez sur les données reçues et ajoutez de nouvelles instances de FormGroup à la FormArray
    value.forEach((experienceData: any) => {
      const nouvelleExperience = this.fb.group({
        title: [experienceData.nom || ''],
        employer: [experienceData.employeur || ''],
        lieu: [experienceData.lieu || ''],
        startDate: [experienceData.debut || ''],
        endDate: [experienceData.fin || ''],
        description: [experienceData.description || ''],
      });
      this.experiences.push(nouvelleExperience);
    });
  }

  addExperience() {
    if (this.cvFormControls['experiences'].value.length == 3) {
      console.log('max length');
    } else {
      const nouvelleExperience = this.fb.group({
        title: [''],
        employer: [''],
        lieu: [''],
        startDate: [''],
        endDate: [''],
        description: [''],
      });
      this.experiences.push(nouvelleExperience);
    }
  }
  deleteExperience(index: number) {
    this.experiences.removeAt(index);
  }

  // Reseau liens Methodes
  get links(): FormArray {
    return this.cvForm.get('links') as FormArray;
  }
  addLinks() {
    if (this.cvFormControls['links'].value.length == 3) {
      console.log('max length');
    } else {
      const newLink = this.fb.group({
        name: [''],
        link: [''],
      });
      this.links.push(newLink);
    }
  }
  deleteLink(index: number) {
    this.links.removeAt(index);
  }

  // Projects methodes
  get projects(): FormArray {
    return this.cvForm.get('projects') as FormArray;
  }
  addProject() {
    const nouveauProjet = this.fb.group({
      title: [],
      description: [],
      link: [],
    });
    this.projects.push(nouveauProjet);
  }
  deleteProject(index: number) {
    this.projects.removeAt(index);
  }
  // Compétences methodes
  get competences() {
    return this.cvForm.get('competences') as FormArray;
  }
  set competences(value: any) {
    this.competences.clear();
    value.forEach((competenceData: any) => {
      const nouvelleCompetence = this.fb.group({
        name: [competenceData.nom || ''],
        description: [competenceData.description || 'N/A'],
        level: [competenceData.niveau || ''],
      });
      this.competences.push(nouvelleCompetence);
    });
  }
  addCompetence() {
    const newCompetence = this.fb.group({
      name: [],
      description: ['N/A'],
      level: [],
    });
    this.competences.push(newCompetence);
  }
  deleteCompetence(index: number) {
    this.competences.removeAt(index);
  }
  // Formation methodes
  get formations() {
    return this.cvForm.get('formations') as FormArray;
  }
  addFormation() {
    const newFormation = this.fb.group({
      name: [],
      etablissement: [],
      periode: this.fb.group({
        startDate: [''],
        endDate: [''],
      }),
    });
    this.formations.push(newFormation);
  }
  deleteFormation(index: number) {
    this.formations.removeAt(index);
  }
  // Hobbies methodes
  get hobbies() {
    return this.cvForm.get('hobbies') as FormArray;
  }
  set hobbies(value: any) {
    this.hobbies.clear();
    value.forEach((hobbieData: any) => {
      const nouvelleHobbie = this.fb.group({
        name: [hobbieData.nom || ''],
      });
      this.hobbies.push(nouvelleHobbie);
    });
  }
  addHobbie() {
    const newHobbie = this.fb.group({
      interest: [],
    });
    this.hobbies.push(newHobbie);
  }
  deleteHobbie(index: number) {
    this.hobbies.removeAt(index);
  }
  // Langues methodes
  get langues() {
    return this.cvForm.get('langues') as FormArray;
  }
  set langues(value: any) {
    this.langues.clear();
    value.forEach((langueData: any) => {
      const nouvelleLangue = this.fb.group({
        langue: [langueData.nom || ''],
        level: [langueData.langue || ''],
      });
      this.langues.push(nouvelleLangue);
    });
  }
  addLangue() {
    const newLangue = this.fb.group({
      langue: [],
      level: [0, []],
    });
    this.langues.push(newLangue);
  }
  deleteLangue(index: number) {
    this.langues.removeAt(index);
  }

  setUserInfosInForm(userInfos: UserInfos) {}
  cancelEditCV() {
    this.editMode = false;
  }
  setUserValue() {
    this.cvForm.patchValue({
      informationForm: {
        lastName: this.userInfos.lastName,
        firstName: this.userInfos.firstName,
        mail: this.userInfos.mail,
        phone: this.userInfos.phone,
      },
      profileForm: {
        title: this.userInfos.specialite,
      },
    });
  }

  changeMode() {
    this.editMode = true;
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  fullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }
  cvToFormData() {
    let formData = new FormData();

    formData.append('description', 'description');
    // formamtions
    if (this.formations.length > 0) {
      this.formations.controls.forEach((element, index) => {
        formData.append(`formation_nom[${index}]`, element.value.name);
        // Problemes Two dates
        formData.append(
          `formation_beginAt[${index}]`,
          element.value.periode.startDate
            ? this.customDatePipe.transform(
                element.value.periode.startDate,
                'JOUR_MOIS_ANNEE_UNIQUEMENT'
              )
            : '00/00/0000'
        );
        formData.append(
          `formation_finishAt[${index}]`,
          element.value.periode.endDate
            ? this.customDatePipe.transform(
                element.value.periode.endDate,
                'JOUR_MOIS_ANNEE_UNIQUEMENT'
              )
            : '00/00/0000'
        );
        formData.append(`formation_description[${index}]`, 'N/A');
        formData.append(
          `formation_etablissement[${index}]`,
          element.value.etablissement
        );
      });
    }
    // competence
    if (this.competences.length > 0) {
      this.competences.controls.forEach((element: any, index: number) => {
        formData.append(`competence_nom[${index}]`, element.value.name);
        formData.append(`competence_description[${index}]`, 'N/A');
        formData.append(`competence_niveau[${index}]`, element.value.level);
      });
    }

    //experience
    if (this.experiences.length > 0) {
      this.experiences.controls.forEach((element, index) => {
        formData.append(`expe_titre[${index}]`, element.value.title);
        formData.append(`expe_employeur[${index}]`, element.value.employer);
        formData.append(`expe_lieu[${index}]`, element.value.lieu);
        formData.append(
          `expe_beginAt[${index}]`,
          element.value.startDate
            ? this.customDatePipe.transform(
                element.value.startDate,
                'JOUR_MOIS_ANNEE_UNIQUEMENT'
              )
            : '00/00/0000'
        );
        formData.append(
          `expe_finishAt[${index}]`,
          element.value.endDate
            ? this.customDatePipe.transform(
                element.value.endDate,
                'JOUR_MOIS_ANNEE_UNIQUEMENT'
              )
            : '00/00/0000'
        );
        formData.append(
          `expe_description[${index}]`,
          element.value.description
        );
      });
    }

    //reseau
    if (this.links.length > 0) {
      this.links.controls.forEach((element, index) => {
        formData.append(`reseau_nom[${index}]`, element.value.name);
        formData.append(`reseau_lien[${index}]`, element.value.link);
      });
    }

    //langue
    if (this.langues.length > 0) {
      this.langues.controls.forEach((element: any, index: number) => {
        formData.append(`langue_nom[${index}]`, element.value.langue);
        formData.append(`langue_niveau[${index}]`, element.value.level);
      });
    }
    return formData;
  }

  addCV() {
    this.cvToFormData();
    this.cvService.addCV(this.cvToFormData()).subscribe({
      next: (value) => {
        this.toastService.openSuccess('Votre CV a bien été ajouté', 'X');
        this.haveCV = !this.haveCV;
        this.editMode = !this.editMode;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.message.includes('Vous avez déjà créer un CV'))
          this.toastService.openSuccess('Vous avez déjà créer un CV', 'X');
      },
    });
  }
  updateCV() {
    this.cvService.updateCV(this.currentCvId, this.cvToFormData()).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
