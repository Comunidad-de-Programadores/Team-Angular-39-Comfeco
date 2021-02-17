import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';
import { User } from '@app/shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
messageError:string;
  constructor(private authSvc: AuthService, private router: Router) {

   }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  async onGoogleLogin() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
      else{
        this.sendMsj('Usuario o Password Invalidos')
      }

    } catch (error) {
      console.log(error);
    }
  }
  sendMsj(msj:string):void{
    this.messageError = msj;
  }
  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['/suscriptor']);
    } else if (user) {
      this.router.navigate(['/login/verificar-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }
  getPaswordErrorMessage() {

    if (this.password.hasError('required')) {
      return 'Debe Ingresar un Valor';
    }

    return this.password.hasError('minlength') ? 'Debe tener al menos 6 Caracteres' : '';
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe Ingresar un Valor';
    }

    return this.email.hasError('email') ? 'Ingrese un Mail Valido' : '';
  }
}
