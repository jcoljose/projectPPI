import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialidade } from 'src/app/models/especialidade.model';
import { Paciente } from 'src/app/models/paciente.model';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: Paciente[] = []
  especialidade: Especialidade[] = []

  perfilForm: FormGroup | any
  consultaForm: FormGroup | any

  editButton = true

  carousel = 1

  constructor(private fb: FormBuilder, private pf: PerfilService, private router: Router) {
    this.perfilForm = this.fb.group({
      nomeCompleto: [{value: '', disabled: true}],
      cpf: [{value: '', disabled: true}],
      dataNascimento: [{value: '', disabled: true}],
      telefone: [{value: '', disabled: true}, [Validators.minLength(11), Validators.maxLength(11)]],
      sexo: [{value: '', disabled: true}],
      altura: [{value: '', disabled: true}, [Validators.min(120), Validators.max(220)]],
      peso: [{value: '', disabled: true}, [Validators.min(30), Validators.max(200)]]
    })

    this.consultaForm = this.fb.group({
      dataConsulta: ['', [Validators.required]],
      especialidade: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.pf.mostrarPerfil(localStorage.getItem('token')).subscribe(res => {
      if (res.value) {
        this.perfil = []
        this.perfil.push(res)
        this.perfil[0].dataDeNascimento = this.perfil[0].dataDeNascimento.slice(0,10)
      } else {
        alert(res.message)
        this.logout()
      }
    })

    this.pf.mostrarEspecialidades().subscribe(res => {this.especialidade = res})
  }

  edit() {
    this.perfilForm.reset()
    this.perfilForm.get('telefone').disabled ? this.perfilForm.get('telefone').enable() : this.perfilForm.get('telefone').disable()
    this.perfilForm.get('sexo').disabled ? this.perfilForm.get('sexo').enable() : this.perfilForm.get('sexo').disable()
    this.perfilForm.get('altura').disabled ? this.perfilForm.get('altura').enable() : this.perfilForm.get('altura').disable()
    this.perfilForm.get('peso').disabled ? this.perfilForm.get('peso').enable() : this.perfilForm.get('peso').disable()
    this.editButton = !this.editButton
  }

  keyPressNumber(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      this.preventDefault(event);
    }
  }

  preventDefault(event: KeyboardEvent | ClipboardEvent) {
    event.preventDefault()
  }

  carouselTransition(n: number) {
    if (!this.editButton) {this.edit()}
    n > 0 ? this.carousel == 4 ? this.carousel /= 4 : this.carousel++ : this.carousel == 1 ? this.carousel *= 4 : this.carousel--

  }

  salvar() {
    this.pf.perfilUpdate(this.perfilForm.getRawValue(), localStorage.getItem('token')).subscribe(res => {
      if (res.value) {alert(res.message)}
      window.location.reload()
    })
  }

  pesquisar() {
    this.pf.mostrarMedicosDisponiveis(this.consultaForm.getRawValue()).subscribe(res => {
      console.log(res)
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
