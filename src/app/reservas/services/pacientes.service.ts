import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente.model'; // define tu modelo aquí
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseUrl = 'http://localhost:3000/pacientes';

  constructor(private http: HttpClient) { }

  getPaciente(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPaciente(paciente: Paciente): Observable<any> {
    const fechaActual = new Date();

    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();

    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    paciente.fecha_registro=`${anio}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
    return this.http.post(`${this.baseUrl}`, paciente);
  }

  updatePaciente(id: string, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePaciente(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPacientesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
