import { Component, OnInit} from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { Cita } from '../../../model/cita.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { SharedService } from '../../../services/shared.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarCitaComponent implements OnInit {
  cita: Cita = {
    id: '',
    razon_cita: '',
    fecha_registro:'',
    sintomas_quejas: '',
    fecha_cita:'',
    inicio_cita:'',
    fin_cita:'',
    estado_cita: '',
    paciente_id: '1',
    doctor_id: '1',
  }
  selectedTime:string="";
  id_paciente: string = "";
  constructor(private citaService: CitasService, private router: Router,private sharedService: SharedService) { }
  ngOnInit() {
    this.sharedService.getVariable().subscribe(value => {
      this.id_paciente = value;
      console.log(this.id_paciente);});
  }
  handleDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      this.cita.fecha_cita = event.value.toLocaleDateString('en-US');
    } else {
      console.log("no hay fecha xd");
    }
  }
  
calculateFinTime(): void {
  this.cita.inicio_cita=this.selectedTime;
  const [hours, minutes] = this.cita.inicio_cita.split(':');
  let hora = parseInt(hours, 10);
  let minuto = parseInt(minutes, 10);

  // Incrementar la hora en uno
  hora++;
  if (hora >= 24) {
    hora = 0;
  }

  // Formatear la nueva hora y asignarla a "fin"
  this.cita.fin_cita = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
}
  agregar() {
    //delete this.cita.id;
    this.cita.paciente_id=this.id_paciente;
    this.citaService.createCita(this.cita).subscribe();
    this.router.navigate(['/citas']);
  }
}
