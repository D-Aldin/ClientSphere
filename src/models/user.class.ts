export class User {
  firstName: string;
  lastName: string;
  birthday: number;
  adress: string;
  city: string;
  state: string;
  postalCode: number;
  email: string;

  constructor(obj: any) {
    this.firstName = obj ? obj.firstName : ' ';
    this.lastName = obj ? obj.lastNameName : ' ';
    this.birthday = obj ? obj.birthday : ' ';
    this.adress = obj ? obj.adress : ' ';
    this.city = obj ? obj.city : ' ';
    this.state = obj ? obj.state : ' ';
    this.postalCode = obj ? obj.postalCode : ' ';
    this.email = obj ? obj.email : ' ';
  }

  public toJSON() {
    return {
      firstName: this.firstName || ' ',
      lastName: this.lastName || ' ',
      birthday: this.birthday || ' ',
      adress: this.adress || ' ',
      city: this.city || ' ',
      state: this.state || ' ',
      postalCode: this.postalCode || ' ',
      email: this.email || ' ',
    };
  }
}
