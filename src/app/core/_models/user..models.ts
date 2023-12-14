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
  constructor(
    firstName: string,
    lastName: string,
    mail: string,
    phone: string,
    photo: string
  ) {
    super(firstName, lastName, mail, phone);
    this.photo = photo;
  }
}
