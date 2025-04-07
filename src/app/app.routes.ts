import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ApiDataComponent } from './api-data/api-data.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: '**', redirectTo: '' } 
];