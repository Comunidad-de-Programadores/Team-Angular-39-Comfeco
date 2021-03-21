import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Insignias } from '@app/core/models/insignias.model';
import { AuthService } from '@app/core/services/auth.service';
import { SkillService } from '@app/core/services/skill.service';
import { User } from '@app/shared/models/user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
@Input() section:string;
@Input() user: User;
  registerForm: FormGroup;
 insignias: Insignias[];

  constructor(private authSvc: AuthService, 
            private router: Router, 
            private fb: FormBuilder,
            private ss:SkillService) {

this.ss.insignias$.subscribe(resp=>{

this.insignias=resp;

  })
    

    this.registerForm = this.fb.group({
      nickName: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      whatsapp: ['', Validators.required],
      discordUser: ['', Validators.required],
      passwordConfirmacion: ['', Validators.required]

    })
  }

  get nickName() { return this.registerForm.get('nickName'); }
  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get whatsapp() { return this.registerForm.get('whatsapp'); }
  get discordUser() { return this.registerForm.get('discordUser'); }
  get passwordConfirmacion() { return this.registerForm.get('passwordConfirmacion'); }

  ngOnInit(): void {
  }

  onRegister() {
    if (this.registerForm.value.password != this.registerForm.value.passwordConfirmacion) {
      Swal.fire({
        title: 'Ojo!',
        text: "La contraseña y la confirmación deben ser iguales.",
        icon: 'info',
        confirmButtonText: 'Cool'
      })
    } else {
      this.authSvc.register(this.registerForm.value).then((user) => {
        if (user && user.emailVerified) {
          this.router.navigate(['/suscriptor']);
        } else if (user) {
          Swal.fire({
            title: 'Alerta!',
            text: 'Se ha enviado un Email debe Confirmarlo!',
            icon: 'warning',
            confirmButtonText: 'Cool'
          })
          this.router.navigate(['/home']);
        }

      });
    }


    // console.log(this.registerForm.value);
  }
  getErrorMessage(campo: string): string {

    switch (campo) {
      case 'nickName':
        if (this.nickName.hasError('required')) {
          return 'Debe Ingresar un Nick';
        }
      case 'name':
        if (this.name.hasError('required')) {
          return 'Debe Ingresar un Nombre';
        }
      case 'email':
        if (this.email.hasError('required')) {
          return 'Debe Ingresar Email';
        }
      case 'password':
        if (this.password.hasError('required')) {
          return 'Debe Ingresar un Password';
        }
      case 'whatsapp':
        if (this.whatsapp.hasError('required')) {
          return 'Debe Ingresar un whatsapp';
        }
      case 'discordUser':
        if (this.discordUser.hasError('required')) {
          return 'Debe Ingresar un usuario de Discord';
        }
      case 'passwordConfirmacion':
        if (this.discordUser.hasError('required')) {
          return 'Debe Ingresar la confirmación de la contraseña';
        }


    }


  }

}
