import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  password = new FormControl();
  city: FormControl<string> = new FormControl();
  province: FormControl<string | null> = new FormControl('');
  zipCode: FormControl<string | number> = new FormControl();
  sendCatalog: FormControl<boolean | null> = new FormControl(false);

  public registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      city: this.city,
      province: this.province,
      zipCode: this.zipCode,
      sendCatalog: this.sendCatalog,
    });
  }
  saveregisterForm() {
    console.dir(this.registerForm, { depth: 0 });
    console.log(
      this.registerForm,
      'Valeurs',
      JSON.stringify(this.registerForm)
    );
    console.log(this.registerForm);
  }
  fillFormData() {
    this.registerForm.setValue({
      firstName: 'Arick',
      lastName: 'Bulakali',
      email: 'arickbulakali@gmail.com',
      password: '123',
      sendCatalog: true,
      province: '',
      zipCode: '',
      city: '',
    });
  }
}
