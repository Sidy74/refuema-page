export class CvProfile {
  title!: string;
  description!: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
export class cvCompetence {
  title!: string;
  level!: string;
  constructor(title: string, level: string) {
    this.level = level + '%';
    this.title = title;
  }
}

export class CvProjet {
  title!: string;
  link!: string;
  description!: string;
  constructor(title: string, link: string, description: string) {
    this.title = title;
    this.link = link;
    this.description = description;
  }
}
export class CvExperience {
  title!: string;
  employer!: string;
  location!: string;
  startDate!: string;
  endDate!: string;
  decription!: string;
  constructor(
    title: string,
    employer: string,
    location: string,
    startDate: string,
    endData: string,
    description: string
  ) {
    this.title = title;
    this.decription = description;
    this.employer = employer;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endData;
  }
}
