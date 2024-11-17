import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PatientComponent } from './features/patient/patient.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'paciente', component: PatientComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
