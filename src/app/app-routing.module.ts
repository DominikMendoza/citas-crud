import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './reservas/reservas.component';
import { AgregarComponent } from './reservas/pages/agregar/agregar.component';
import { ModificarComponent } from './reservas/pages/modificar/modificar.component';

const routes: Routes = [
  { path: '', redirectTo: '/pacientes', pathMatch: 'full' },
  { path: 'pacientes', component: PacienteComponent },
  { path: 'add', component: AgregarComponent },
  { path: 'edit/:id', component: ModificarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
