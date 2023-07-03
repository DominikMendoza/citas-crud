import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { Cita } from '../../../model/cita.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cita',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  citas: Cita[] = [];
  citaForm: FormGroup;
  displayedColumns: string[] = ['nombre_completo', 'fecha_nacimiento', 'genero', 'direccion', 'telefono', 
'correo_electronico', 'numero_seguro_medico', 'razon_cita','fecha_registro', 'sintomas_quejas', 'estado_cita', 'acciones'];

  constructor(private citaService: CitasService, private router: Router) {
    this.citaForm = new FormGroup({});
  }

  ngOnInit() {
    this.getCitasByPacientId('1');
    this.citaForm = new FormGroup({
      'razon_cita': new FormControl(null),
      'fecha_registro': new FormControl(null),
      'sintomas_quejas': new FormControl(null),
      'estado_cita': new FormControl(null)
    });
  }

  getCitasByPacientId(paciente_id: string): void {
    this.citaService.getCitasByPacienteId(paciente_id)
      .subscribe(citas => this.citas = citas);
  }
  deleteCita(id: string): void {
    this.citaService.deleteCita(id)
      .subscribe(() => this.getCitasByPacientId(id)); // Actualiza la lista después de borrar
  }

  onSubmit(): void {
    // Aquí puedes llamar a createCita o updateCita dependiendo de si estás agregando o editando
  }
}


