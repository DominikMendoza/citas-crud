import { Component, OnInit} from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { Cita } from '../../../model/cita.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
    estado_cita: '',
    paciente_id: '1',
    doctor_id: '1',
  }
  id_paciente: string = "";
  constructor(private citaService: CitasService, private router: Router,private sharedService: SharedService) { }
  ngOnInit() {
    this.sharedService.getVariable().subscribe(value => {
      this.id_paciente = value;
      console.log(this.id_paciente);});
  }
  agregar() {
    //delete this.cita.id;
    this.cita.paciente_id=this.id_paciente;
    this.citaService.createCita(this.cita).subscribe();
    this.router.navigate(['/citas']);
  }
}
