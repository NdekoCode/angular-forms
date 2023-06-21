import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confpassword: new FormControl(),
    });
  }
}
