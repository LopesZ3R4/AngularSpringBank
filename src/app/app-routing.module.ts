// src/app/app-routing.module.ts

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsFormComponent} from './details-form/details-form.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details-form', component: DetailsFormComponent},
  // Add additional routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
