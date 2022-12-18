import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any

  constructor(private fb: FormBuilder, private register: RegisterService) {
    this.cadastroForm = this.fb.group({
      nomeCompleto: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d/), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/)]],
      rSenha: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d/), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/)]]
    })
  }

  ngOnInit(): void { }

  submit(): void {
    this.register.registrarPaciente(this.cadastroForm.getRawValue()).subscribe(res => {console.log(res)})
  }
}
