import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

import { PageNotLoggedComponent } from './page-not-logged/page-not-logged.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageHomePacienteComponent } from './page-home-paciente/page-home-paciente.component';
import { PageHomeMedicoComponent } from './page-home-medico/page-home-medico.component';
import { PageHomeAdminComponent } from './page-home-admin/page-home-admin.component';
import { PageProfilePacienteComponent } from './page-profile-paciente/page-profile-paciente.component';
import { PageProfileMedicoComponent } from './page-profile-medico/page-profile-medico.component';
import { PageQueriesPacienteComponent } from './page-queries-paciente/page-queries-paciente.component';
import { PageQueriesMedicoComponent } from './page-queries-medico/page-queries-medico.component';
import { PageConfigComponent } from './page-config/page-config.component';
import { PageManagementComponent } from './page-management/page-management.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotLoggedComponent,
    PageLoginComponent,
    PageRegisterComponent,
    PageHomePacienteComponent,
    PageHomeMedicoComponent,
    PageHomeAdminComponent,
    PageProfilePacienteComponent,
    PageProfileMedicoComponent,
    PageQueriesPacienteComponent,
    PageQueriesMedicoComponent,
    PageConfigComponent,
    PageManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
