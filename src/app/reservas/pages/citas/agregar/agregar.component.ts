import { Component } from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { Cita } from '../../../model/cita.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarCitaComponent {
  cita: Cita = {
    id: '',
    razon_cita: '',
    fecha_registro:'',
    sintomas_quejas: '',
    estado_cita: '',
    paciente_id: '1',
    doctor_id: '1',
  }
  constructor(private citaService: CitasService, private router: Router) { }

  agregar() {
    //delete this.cita.id;
    this.citaService.createCita(this.cita).subscribe();
    this.router.navigate(['/citas']);
  }
}
