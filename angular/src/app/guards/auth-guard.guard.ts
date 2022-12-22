import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor (private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const authentic = () => this.auth.isAuthenticated(localStorage.getItem('token')).subscribe(res => {
      if (!res.value) {
        if (state.url != '/login') {
          this.router.navigate(['/login'])
        }
      }
      return res.value
    })
    return authentic() ? true : false
  }
}
