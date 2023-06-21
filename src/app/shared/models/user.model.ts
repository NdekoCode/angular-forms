export class User {
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public password: string = '';
  public city: string = '';
  public province: string = '';
  public zipCode: string | number = '';
  public sendCatalog: boolean = false;
  public address: {
    address1: string;
    address2: string;
  } = {
    address1: '',
    address2: '',
  };
}
