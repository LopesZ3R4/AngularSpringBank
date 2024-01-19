// src/app/app-routing.module.ts

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterFormComponent} from './home-page/register-form/register-form.component';
import {HomeComponent} from './home-page/home/home.component';
import {LoginComponent} from "./home-page/login/login.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: RegisterFormComponent},
  {path: 'login', component: LoginComponent},
  // Add additional routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
