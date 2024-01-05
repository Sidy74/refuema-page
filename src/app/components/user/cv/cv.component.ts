import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfos } from 'src/app/core/_models/user..models';
import { CvService } from 'src/app/core/_services/cv/cv.service';
import { ImageService } from 'src/app/core/_services/images/image.service';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { years } from 'src/app/shared/_utils/years';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
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

  constructor(
    private fb: FormBuilder,
    private cvService: CvService,
    private shareUserInfosService: ShareUserInfosService,
    private imageService: ImageService
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
    });
    this.cvFormControls = this.cvForm.controls;
  }

  // Expériences methodes
  get experiences(): FormArray {
    return this.cvForm.get('experiences') as FormArray;
  }
  addExperience() {
    if (this.cvFormControls['experiences'].value.length == 3) {
      console.log('max length');
    } else {
      const nouvelleExperience = this.fb.group({
        title: [''],
        employer: [''],
        lieu: [''],
        startDate: this.fb.group({
          mois: [''],
          annee: [''],
        }),
        endDate: this.fb.group({
          mois: [''],
          annee: [''],
        }),
        description: [''],
      });
      this.experiences.push(nouvelleExperience);
    }
  }
  deleteExperience(index: number) {
    this.experiences.removeAt(index);
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
  addCompetence() {
    const newCompetence = this.fb.group({
      title: [],
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
  }
  setUserInfosInForm(userInfos: UserInfos) {}

  addCV() {
    this.haveCV = true;
    this.editMode = true;
  }

  cancelEditCV() {
    this.editMode = false;
  }
  setUserCvValue() {}
  setUserValue() {
    this.cvForm.patchValue({
      informationForm: {
        lastName: this.userInfos.lastName,
        firstName: this.userInfos.firstName,
        mail: this.userInfos.mail,
        phone: this.userInfos.phone,
        specialite: this.userInfos.specialite,
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
}
