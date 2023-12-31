export class Article {
  title!: string;
  description!: string;
  type!: number;
  portee!: number;
  media!: Array<string>;

  constructor(
    title: string,
    description: string,
    type: number,
    portee: number,
    media: Array<string>
  ) {
    this.title = title;
    this.description = description;
    this.portee = portee;
    this.type = type;
    this.media = media;
  }
}
