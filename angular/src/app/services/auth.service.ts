import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string

  constructor(private http: HttpClient) { this.URL = 'http://localhost:3333/';}

  login(login: Login): Observable<any> {
    return this.http.post(`${this.URL}login`, login)
  }

  isAuthenticated(): Observable<any> {
    return this.http.get(`${this.URL}auth`)
  }
}
