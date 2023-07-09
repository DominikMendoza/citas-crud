import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PacienteComponent } from './reservas/reservas.component';
import { PacienteService } from './reservas/services/pacientes.service';
import { AgregarComponent } from './reservas/pages/pacientes/agregar/agregar.component';
import { ModificarComponent } from './reservas/pages/pacientes/modificar/modificar.component';
import { ListComponent } from './reservas/pages/citas/list/list.component';
import { CitasService } from './reservas/services/citas.service';
import { AgregarCitaComponent } from './reservas/pages/citas/agregar/agregar.component';



@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    AgregarComponent,
    ModificarComponent,
    ListComponent,
    AgregarCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    TimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [PacienteService, CitasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
