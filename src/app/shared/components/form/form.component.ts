import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
      ],
      password: ['', Validators.required, Validators.minLength(4)],
      rating: 0,
      phoneNumber: '',
      notification: 'email',
      city: ['', [Validators.required, Validators.minLength(2)]],
      province: ['', [Validators.required, Validators.minLength(2)]],
      zipCode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      sendCatalog: { value: false, disabled: false },
    });
  }
  setNotificationSetting(method: string) {
    const phoneControl = this.registerForm.get('phoneNumber');
    if (method === 'phone') {
      phoneControl?.setValidators([
        Validators.required,
        Validators.minLength(10),
      ]);
    } else {
      phoneControl?.clearValidators();
    }
    this.registerForm.get('phoneNumber')?.updateValueAndValidity();
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
      sendCatalog: false,
      province: '',
      zipCode: '',
      city: '',
    });
  }
}
