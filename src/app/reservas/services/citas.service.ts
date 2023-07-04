import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject  } from 'rxjs';
import { Cita } from '../model/cita.model' // define tu modelo aquí
@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private baseUrl = 'http://localhost:3000/citas';

  constructor(private http: HttpClient) { }

  getCitasByPacienteId(paciente_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?paciente_id=${paciente_id}`);
    //return this.http.get(`${this.baseUrl}/${paciente_id}`);
    //return this.http.get(`${this.baseUrl}`);
  }

  createCita(cita: Cita): Observable<any> {
    const fechaActual = new Date();

    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();

    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    cita.fecha_registro=`${anio}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
    return this.http.post(`${this.baseUrl}`, cita);
  }

  deleteCita(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
