import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Paciente } from '../models/paciente.model';
import { Pesquisa } from '../models/pesquisa.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private URL: string

  constructor(private http: HttpClient) { this.URL = 'http://localhost:3333/';}

  mostrarPerfil(ls: string | null): Observable<any> {
    return this.http.get(`${this.URL}mostrarPerfil/${ls}`)
  }

  perfilUpdate(pf: Paciente, ls: string | null): Observable<any> {
    return this.http.patch(`${this.URL}perfilUp/${ls}`, pf)
  }

  mostrarEspecialidades(): Observable<any> {
    return this.http.get(`${this.URL}especialidade`)
  }

  mostrarMedicosDisponiveis(pesquisa: Pesquisa): Observable<any> {
    return this.http.post(`${this.URL}medicos`, pesquisa)
  }
}
