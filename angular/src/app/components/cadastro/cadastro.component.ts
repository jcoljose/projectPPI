import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private register: RegisterService, private router: Router) {
    this.cadastroForm = this.fb.group({
      nomeCompleto: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      sexo: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d/), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/)]],
      rSenha: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d/), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/)]]
    })
  }

  ngOnInit(): void { }

  keyPressNumber(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      this.preventDefault(event);
    }
  }

  keyPressName(event: KeyboardEvent) {
    const pattern = /[a-z\u00C0-\u00FF ]/gi
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)){
      this.preventDefault(event);
    }
  }

  preventDefault(event: KeyboardEvent | ClipboardEvent) {
    event.preventDefault()
  }

  submit(): void {
    this.register.registrar(this.cadastroForm.getRawValue()).subscribe(res => {
      alert(res.message)
      if (res.value) {this.router.navigate(['/'])}
    })
  }
}
