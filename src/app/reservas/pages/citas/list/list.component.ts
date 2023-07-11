import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { Cita } from '../../../model/cita.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { SharedService } from '../../../services/shared.service';
@Component({
  selector: 'app-cita',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  @ViewChild('picker') picker!: MatDatepicker<any>;
  citas: Cita[] = [];
  citasTotales: Cita[] = [];
  citaForm: FormGroup;
  id_paciente: string = "";
  fechaFiltrada: string = "";
  constructor(private citaService: CitasService, private router: Router,private sharedService: SharedService) {
    this.citaForm = new FormGroup({});
   
  }

  ngOnInit() {
    this.citaForm = new FormGroup({
      'razon_cita': new FormControl(null),
      'sintomas_quejas': new FormControl(null),
      'fecha_cita': new FormControl(null),
      'inicio_cita': new FormControl(null),
      'fin_cita': new FormControl(null)
    });
  
    this.sharedService.getVariable().subscribe(value => {
      this.id_paciente = value;
      console.log(this.id_paciente);
  
      this.citaService.getCitasByPacienteId(this.id_paciente).subscribe(citas => {
        this.citas = citas;
        this.citasTotales=citas;
        console.log(this.citas);
      });
    });
  }
  handleDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      this.fechaFiltrada=event.value.toLocaleDateString('en-US');
      this.citas=this.citasTotales.filter(cita=>cita.fecha_cita===this.fechaFiltrada)
    } else {
      this.citas=this.citasTotales;
      console.log("no hay cita con esa fechaxd");
    }
  }
  ngOnChanges() {
    // Aquí puedes agregar lógica adicional si es necesario
  }
  resetFilter() {
    this.citas = this.citasTotales;
    this.fechaFiltrada="";
    this.picker.select(null);
  }
  deleteCita(id: string): void {
    this.citaService.deleteCita(id)
      .subscribe(() => this.citaService.getCitasByPacienteId(this.id_paciente).subscribe(citas => {
        this.citas = citas;
        console.log(this.citas);
      })); // Actualiza la lista después de borrar
  }

  onSubmit(): void {
    // Aquí puedes llamar a createCita o updateCita dependiendo de si estás agregando o editando
  }
}


  


