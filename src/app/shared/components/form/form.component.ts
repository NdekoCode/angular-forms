import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  userForm: User = new User();
  saveFormData(form: NgForm) {
    console.dir(form, { depth: 0 });
    console.log(form.status, 'Valeurs', JSON.stringify(form.value));
    console.log(this.userForm);
  }
}
