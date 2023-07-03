import { Component } from '@angular/core';
import { PacienteService } from '../../../services/pacientes.service';
import { Paciente } from '../../../model/paciente.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  paciente: Paciente = {
    id: '',
    nombre_completo: '',
    fecha_nacimiento: '',
    genero: '',
    direccion: '',
    telefono: '',
    correo_electronico: '',
    numero_seguro_medico: '',
  }
  constructor(private pacienteService: PacienteService, private router: Router) { }

  agregar() {
    //delete this.paciente.id;
    this.pacienteService.createPaciente(this.paciente).subscribe();
    this.router.navigate(['/pacientes']);
  }
}
