export class User {
  mail!: string;
  lastName!: string;
  firstName!: string;
  phone!: string;

  constructor(
    firstName: string,
    lastName: string,
    mail: string,
    phone: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.phone = phone;
  }
}

export class UserInfos extends User {
  photo!: string;
  specialite!: string;
  titre!: string;
  constructor(
    firstName: string,
    lastName: string,
    mail: string,
    phone: string,
    photo: string,
    specialite: string,
    titre: string
  ) {
    super(firstName, lastName, mail, phone);
    this.photo = photo;
    this.specialite = specialite;
    this.titre = titre;
  }
}
