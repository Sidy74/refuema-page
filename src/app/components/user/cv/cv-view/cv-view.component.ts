import { Component, Input } from '@angular/core';
import { CustomDatePipe } from 'src/app/core/_pipes/custom-date/custom-date.pipe';
import { NgIf, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-cv-view',
    templateUrl: './cv-view.component.html',
    styleUrls: ['./cv-view.component.css'],
    standalone: true,
    imports: [
        MatIcon,
        NgIf,
        NgFor,
        NgSwitch,
        NgSwitchCase,
        CustomDatePipe,
    ],
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
