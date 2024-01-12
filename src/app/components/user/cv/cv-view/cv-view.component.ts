import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css'],
})
export class CvViewComponent {
  @Input() cvUserImage: string = 'N/A';
  @Input() cvProfileDescription!: string;
  @Input() cvProfileTitle!: string;
  @Input() cvInformationFirstName!: string;
  @Input() cvInformationLastName!: string;
  @Input() cvInformationPhone!: string;
  @Input() cvInformationMail!: string;
  @Input() cvInformationTitle!: string;
  @Input() cvInformationSpecialite!: string;
  @Input() cvCompetences!: Array<any>;
  @Input() cvFormations!: Array<any>;
  @Input() cvProjets!: Array<any>;
  @Input() cvExperiences!: Array<any>;
  @Input() cvLangues!: Array<any>;
  @Input() cvHobbies!: Array<any>;
  @Input() cvLinks!: Array<any>;
}
