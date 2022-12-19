import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
  })
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.loginForm.getRawValue()).subscribe(res => {
      alert(res.message)
      if(res.value) {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/perfil'])
      }
    })
  }
}
