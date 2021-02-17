import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent   {

  forgotForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email])
   
  });
  
  get userEmail(){return this.forgotForm.get('userEmail');}
  constructor(private authSvc: AuthService, private router: Router) { }
  
  async onReset() {
    const email = this.userEmail.value;
    console.log(this.userEmail.value);
    try {
     
     
      await this.authSvc.resetPassword(email);
      Swal.fire({
        title: 'Se Ha enviado Un Email. ',
        text: "Verifique su Bandeja de Entrada!",
        icon: 'info',
        confirmButtonText: 'Ok!'
      })
      
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
