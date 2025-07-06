export class User {
  firstName: string;
  lastName: string;
  birthday: number;
  adress: string;
  adress2: string;
  city: string;
  state: string;
  postalCode: number;

  constructor(obj: any) {
    this.firstName = obj ? obj.firstName : ' ';
    this.lastName = obj ? obj.lastNameName : ' ';
    this.birthday = obj ? obj.birthday : ' ';
    this.adress = obj ? obj.adress : ' ';
    this.adress2 = obj ? obj.adress2 : ' ';
    this.city = obj ? obj.city : ' ';
    this.state = obj ? obj.state : ' ';
    this.postalCode = obj ? obj.postalCode : ' ';
  }

  public toJSON() {
    return {
      firstName: this.firstName || ' ',
      lastName: this.lastName || ' ',
      birthday: this.birthday || ' ',
      adress: this.adress || ' ',
      adress2: this.adress2 || ' ',
      city: this.city || ' ',
      state: this.state || ' ',
      postalCode: this.postalCode || ' ',
    };
  }
}
