import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any

  constructor(private fb: FormBuilder, private register: RegisterService) {
    this.cadastroForm = this.fb.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(4)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d/), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/), Validators.pattern(/[&$?!_-]/)]],
      rSenha: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d/), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/), Validators.pattern(/[&$?_-]/)]]
    })
  }

  ngOnInit(): void { }

  submit(): void {
    this.register.registrarPaciente(this.cadastroForm.getRawValue()).subscribe(res => {console.log(res)})
  }
}
