import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule
  ]
})
export class MedicoModule { }
