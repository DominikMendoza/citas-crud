import { Component, OnInit, OnChanges } from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { Cita } from '../../../model/cita.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
@Component({
  selector: 'app-cita',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  citas: Cita[] = [];
  citaForm: FormGroup;
 
  displayedColumns: string[] = ['nombre_completo', 'fecha_nacimiento', 'genero', 'direccion', 'telefono',
    'correo_electronico', 'numero_seguro_medico', 'razon_cita', 'fecha_registro', 'sintomas_quejas', 'estado_cita', 'acciones'];

  id_paciente: string = "";

  constructor(private citaService: CitasService, private router: Router,private sharedService: SharedService) {
    this.citaForm = new FormGroup({});
   
  }

  ngOnInit() {
    this.citaForm = new FormGroup({
      'razon_cita': new FormControl(null),
      'fecha_registro': new FormControl(null),
      'sintomas_quejas': new FormControl(null),
      'estado_cita': new FormControl(null)
    });
  
    this.sharedService.getVariable().subscribe(value => {
      this.id_paciente = value;
      console.log(this.id_paciente);
  
      this.citaService.getCitasByPacienteId(this.id_paciente).subscribe(citas => {
        this.citas = citas;
        console.log(this.citas);
      });
    });
  }
  

  ngOnChanges() {
    // Aquí puedes agregar lógica adicional si es necesario
  }

  deleteCita(id: string): void {
    this.citaService.deleteCita(id)
      .subscribe(() => this.citaService.getCitasByPacienteId(id)); // Actualiza la lista después de borrar
  }

  onSubmit(): void {
    // Aquí puedes llamar a createCita o updateCita dependiendo de si estás agregando o editando
  }
}


  


