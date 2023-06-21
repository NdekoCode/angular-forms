import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './shared/components/form/form.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { RegisterComponent } from './shared/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RegisterComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
