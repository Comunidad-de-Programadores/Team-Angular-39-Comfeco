
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { SkillService } from '@app/core/services/skill.service';
import { User } from './../../../core/models/user.model';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.css']
})
export class FormEditUserComponent implements OnInit {
  formEditUser: FormGroup;
  user:any;
  perfilStateValue
  constructor(private authSvc: AuthService,
 private router: Router, 
private fb: FormBuilder,
private ss:SkillService) {


    this.authSvc.user$.subscribe(resp => {
     
     this.user=resp;
    this.mostrarDatosUser();
    })

    this.formEditUser = this.fb.group({
      nickName: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      confirmPassword: [''],
      genero: ['', Validators.required],
      FchNacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      areaConocimiento: ['', Validators.required],
      facebook: [''],
      github: [''],
      linkedin: [''],
      twitter: [''],
      biografia: [''],
    })
  }

  get nickName() { return this.formEditUser.get('nickName'); }
  get email() { return this.formEditUser.get('email'); }
  get password() { return this.formEditUser.get('password'); }
  get confirmPassword() { return this.formEditUser.get('confirmPassword'); }
  get genero() { return this.formEditUser.get('genero'); }
  get FchNacimiento() { return this.formEditUser.get('FchNacimiento'); }
  get areaConocimiento() { return this.formEditUser.get('areaConocimiento'); }
  get facebook() { return this.formEditUser.get('facebook'); }
  get github() { return this.formEditUser.get('github'); }
  get pailinkedins() { return this.formEditUser.get('linkedin'); }
  get twitter() { return this.formEditUser.get('twitter'); }
  get pais() { return this.formEditUser.get('pais'); }
  get biografia() { return this.formEditUser.get('biografia'); }
  ngOnInit(): void {

  }

  /**
     * veo si tiene o merece la Insignia de Social
     */
  checkSocialInsignia(user:any){
  if (!this.ss.insignias[0].isActive){
    this.perfilStateValue = 0;
    let cadena = JSON.stringify(user);
    const items = cadena.split(',');
    items.forEach(ele => {
      this.perfilStateValue++;

    })
    //si tiene todo cargado activo la insignia
    if (this.perfilStateValue >= 22) {

      this.ss.updateInsignia('sociable');
      Swal.fire({
        title: 'Insignia Sociable',
        text: 'Has Obtenido una Nueva Insignia! ',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      return true;
    }
    else {
      return false;
    }



}
else{
return true;
}

}
  actualizar() {
    if (this.formEditUser.value.password != this.formEditUser.value.confirmPassword) {
      Swal.fire({
        title: 'Ojo!',
        text: "La contraseña y la confirmación deben ser iguales.",
        icon: 'info',
        confirmButtonText: 'Cool'
      })
    } else {
      this.authSvc.updateUserData(this.user,this.formEditUser.value).then((user) => {
      
       let userComplete={...this.user, ...this.formEditUser.value};

      
    
          Swal.fire({
            title: 'Perfil',
            text: 'Se ha Actualizado su Información!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

          setTimeout(() => {
            this.checkSocialInsignia(userComplete);
          }, 2000);
                
          this.router.navigate(['/perfil']);
       

      });
    }
}


    // console.log(this.formEditUser.value);
  
  getErrorMessage(campo: string): string {

    switch (campo) {
      case 'nickName':
        if (this.nickName.hasError('required')) {
          return 'Debe Ingresar un Nick';
        }
      case 'genero':
        if (this.genero.hasError('required')) {
          return 'Debe Ingresar un genero';
        }
      case 'email':
        if (this.email.hasError('required')) {
          return 'Debe Ingresar Email';
        }
      case 'password':
        if (this.password.hasError('required')) {
          return 'Debe Ingresar un Password';
        }
      case 'confirmPassword':
        if (this.confirmPassword.hasError('required')) {
          return 'Debe Ingresar un confirmación de contraseña';
        }
      case 'FchNacimiento':
        if (this.FchNacimiento.hasError('required')) {
          return 'Debe Ingresar la fecha de nacimiento';
        }
      case 'pais':
        if (this.pais.hasError('required')) {
          return 'Debe Ingresar un pais';
        }
      case 'areaConocimiento':
        if (this.pais.hasError('required')) {
          return 'Debe Ingresar un area de conocimiento';
        }


    }


  }

  mostrarDatosUser() {
    this.formEditUser.get('nickName').setValue(this.user.nickName);
    this.formEditUser.get('email').setValue(this.user.email);
    this.formEditUser.get('genero').setValue(this.user.genero);
    this.formEditUser.get('FchNacimiento').setValue(this.user.FchNacimiento);
     this.formEditUser.get('pais').setValue(this.user.pais);
    this.formEditUser.get('areaConocimiento').setValue(this.user.areaConocimiento);
    this.formEditUser.get('facebook').setValue(this.user.facebook);
    this.formEditUser.get('github').setValue(this.user.github);
    this.formEditUser.get('linkedin').setValue(this.user.linkedin);
    this.formEditUser.get('twitter').setValue(this.user.twitter);
    this.formEditUser.get('biografia').setValue(this.user.biografia);


    
  }

  abrirRedSocial(host, value) {
    let valor = this.formEditUser.get(value).value;
    if (valor) {
      window.open(host + valor, '_blank');
    }
  }

}