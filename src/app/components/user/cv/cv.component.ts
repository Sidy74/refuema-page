import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfos } from 'src/app/core/_models/user..models';
import { CvService } from 'src/app/core/_services/cv/cv.service';
import { ImageService } from 'src/app/core/_services/images/image.service';
import { ShareUserInfosService } from 'src/app/core/_services/share-user-infos.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements AfterContentInit {
  haveCV: boolean = true;
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
    });
    this.cvFormControls = this.cvForm.controls;
  }

  get experiences(): FormArray {
    return this.cvForm.get('experiences') as FormArray;
  }

  ajouterExperience() {
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
  deleteExperience(index: number) {
    this.experiences.removeAt(index);
  }

  get projects(): FormArray {
    return this.cvForm.get('projects') as FormArray;
  }

  ajouterProjet() {
    const nouveauProjet = this.fb.group({});
    this.projects.push(nouveauProjet);
    console.log(this.cvForm.controls['experiences'].value);
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
      },
      error(err) {
        console.log(err);
      },
    });
  }
  setUserInfosInForm(userInfos: UserInfos) {}

  addCV() {
    console.log('click');
  }
  fullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
