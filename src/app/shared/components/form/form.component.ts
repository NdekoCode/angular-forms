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
      city: ['', [Validators.required, Validators.minLength(2)]],
      province: ['', [Validators.required, Validators.minLength(2)]],
      zipCode: ['', [Validators.required, Validators.minLength(2)]],
      sendCatalog: { value: false },
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
