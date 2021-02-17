import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent   {

 
  userEmail = new FormControl('');
  constructor(private authSvc: AuthService, private router: Router) { }

  async onReset() {
    try {
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Se Ha enviado Un Email. Verifique su Bandeja de Entrada!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
