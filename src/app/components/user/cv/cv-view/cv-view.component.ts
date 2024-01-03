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

  @Input() cvCompetences: Array<cvCompetence> = new Array<cvCompetence>(
    new cvCompetence('Python &amp; Django', '50'),
    new cvCompetence('Javascript', '80'),
    new cvCompetence('Java', '70'),
    new cvCompetence('UML', '100'),
    new cvCompetence('Figma', '100'),
    new cvCompetence('Ruby on Rails', '20')
  );
  @Input() cvProjets: Array<CvProjet> = new Array<CvProjet>(
    new CvProjet(
      'CoderPro',
      'https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/',
      `A responsive website template designed to help developers launch
    their software projects`
    ),
    new CvProjet(
      'Nova Pro',
      'https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/',
      `A responsive Bootstrap theme designed to help app developers
      promote their mobile apps`
    ),
    new CvProjet(
      'DevCard',
      'https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-5-vcard-portfolio-template-for-software-developers/',
      `A portfolio website template designed for software
      developers.`
    ),
    new CvProjet(
      'Launch',
      'https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-5-template-for-saas-businesses/',
      `A responsive website template designed to help startups promote
      their products or services.`
    )
  );
  @Input()
  cvExperiences!: Array<any>;
}
