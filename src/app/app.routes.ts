import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'componente-principal', pathMatch: 'full' }, 
  { path: 'componente-principal', component: PrincipalComponent }
];
