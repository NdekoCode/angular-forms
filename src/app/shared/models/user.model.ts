import { FormControl } from '@angular/forms';

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

export class UserFormGroup {
  public firstName: FormControl<string> = new FormControl();
  public lastName: FormControl<string> = new FormControl();
  public email: FormControl<string> = new FormControl();
  public password: FormControl<string> = new FormControl();
  public city: FormControl<string> = new FormControl();
  public province: FormControl<string> = new FormControl();
  public zipCode: FormControl<string | number> = new FormControl();
  public sendCatalog: FormControl<boolean | null> = new FormControl(false);
  public address: {
    address1: FormControl<string>;
    address2: FormControl<string>;
  } = {
    address1: new FormControl(),
    address2: new FormControl(),
  };
}
