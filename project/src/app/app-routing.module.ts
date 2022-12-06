import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/not-login', pathMatch: 'full' },
  { path: 'not-login', loadChildren: () => import('./not-login/not-login.module').then(m => m.NotLoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
