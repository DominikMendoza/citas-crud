// paciente.component.ts
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './services/pacientes.service';
import { Paciente } from './model/paciente.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes: Paciente[] = [];
  pacienteForm: FormGroup;
  displayedColumns: string[] = ['nombre_completo', 'fecha_nacimiento', 'genero', 'direccion', 'telefono', 
'correo_electronico', 'numero_seguro_medico', 'razon_cita','fecha_registro', 'sintomas_quejas', 'estado_cita', 'acciones'];

  constructor(private pacienteService: PacienteService, private router: Router) {
    this.pacienteForm = new FormGroup({});
  }

  ngOnInit() {
    this.getPacientes();
    this.pacienteForm = new FormGroup({
      'nombre_completo': new FormControl(null),
      'fecha_nacimiento': new FormControl(null),
      'genero': new FormControl(null),
      'direccion': new FormControl(null),
      'telefono': new FormControl(null),
      'correo_electronico': new FormControl(null),
      'numero_seguro_medico': new FormControl(null),
      'razon_cita': new FormControl(null),
      'fecha_registro': new FormControl(null),
      'sintomas_quejas': new FormControl(null),
      'estado_cita': new FormControl(null)
    });
  }

  getPacientes(): void {
    this.pacienteService.getPacientesList()
      .subscribe(pacientes => this.pacientes = pacientes);
  }

  updatePaciente(id: string): void {
    this.router.navigate(['/edit', id]);
    // Aquí puedes obtener los datos del paciente y rellenar el formulario para editar
  }

  deletePaciente(id: string): void {
    this.pacienteService.deletePaciente(id)
      .subscribe(() => this.getPacientes()); // Actualiza la lista después de borrar
  }

  onSubmit(): void {
    // Aquí puedes llamar a createPaciente o updatePaciente dependiendo de si estás agregando o editando
  }
}

