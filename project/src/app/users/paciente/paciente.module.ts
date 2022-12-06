import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsultaComponent } from './consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
