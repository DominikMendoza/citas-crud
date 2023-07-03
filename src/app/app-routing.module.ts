import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './reservas/reservas.component';
import { AgregarComponent } from './reservas/pages/pacientes/agregar/agregar.component';
import { ModificarComponent } from './reservas/pages/pacientes/modificar/modificar.component';
import { ListComponent } from './reservas/pages/citas/list/list.component';
import { AgregarCitaComponent } from './reservas/pages/citas/agregar/agregar.component';

const routes: Routes = [
  { path: '', redirectTo: '/pacientes', pathMatch: 'full' },
  { path: 'pacientes', component: PacienteComponent },
  { path: 'add', component: AgregarComponent },
  { path: 'edit/:id', component: ModificarComponent },
  { path: 'citas', component: ListComponent },
  { path: 'add-citas', component: AgregarCitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
