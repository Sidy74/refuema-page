export class User {
  mail!: string;
  photo!: string;
  lastName!: string;
  firstName!: string;
  phone!: string;
}
export class UserInfos extends User {
  // override mail!: string;
  // override photo!: string;
  // override lastName!: string;
  // override firstName!: string;
  // override phone!: string;
  constructor(
    firstName: string,
    lastName: string,
    mail: string,
    phone: string,
    photo: string
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.phone = phone;
    this.photo = photo;
  }
}
