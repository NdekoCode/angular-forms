import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from 'src/app/shared/components/form/form.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
