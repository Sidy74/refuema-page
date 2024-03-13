export class Article {
  id!: number;
  titre: string;
  type: string;
  description!: string;
  portee!: string;
  status!: string;
  medias: any[];
  date_publication!: { date: string };

  constructor(
    titre: string,
    type: string,
    description: string,
    portee: string,
    medias: any[],
    date_publication: { date: string }
  ) {
    this.titre = titre;
    this.type = type;
    this.description = description;
    this.portee = portee;
    this.medias = medias;
    this.status = 'Publié';
    this.date_publication = date_publication; // Set default value for status
  }

  
}