import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotLoginRoutingModule } from './not-login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NotLoginRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class NotLoginModule { }
