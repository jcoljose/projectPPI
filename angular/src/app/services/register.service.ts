import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private URL: string

  constructor(private http: HttpClient) {this.URL = 'http://localhost:3333/';}

  registrar(registro: Paciente): Observable<any> {
    return this.http.post(`${this.URL}registrar`, registro)
  }
}
