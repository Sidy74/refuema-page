import { Component, Input } from '@angular/core';
import {
  cvCompetence,
  CvProjet,
  CvExperience,
} from 'src/app/core/_models/cv.model';

@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css'],
})
export class CvViewComponent {
  @Input() cvUserImage: string = 'N/A';
  @Input() cvProfilText: string = 'N/A';
  @Input() cvProfileDescription!: string;
  @Input() cvProfileTitle!: string;
  @Input() cvInformationFirstName!: string;
  @Input() cvInformationLastName!: string;
  @Input() cvInformationPhone!: string;
  @Input() cvInformationMail!: string;
  @Input() cvInformationTitle!: string;
  @Input() cvInformationSpecialite!: string;
  @Input() cvCompetences!: Array<cvCompetence>;
  @Input() cvFormations!: Array<any>;
  @Input() cvProjets!: Array<any>;
  @Input() cvExperiences!: Array<any>;
  @Input() cvLangues !:Array<any>
  @Input() cvHobbies !: Array<any>;
}
