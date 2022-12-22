import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  disabled: boolean = true

  cpf: string = ''
  nomeCompleto: string = ''
  telefone: string = ''
  dataDeNascimento: Date = new Date()

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated(localStorage.getItem('token')).subscribe(res => {
      this.cpf = res.cpf
      this.nomeCompleto = res.nomeCompleto
      this.telefone = res.telefone
      this.dataDeNascimento = res.dataDeNascimento.slice(0, 10)
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
