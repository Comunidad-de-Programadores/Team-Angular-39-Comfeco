import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { User } from '@app/shared/models/user.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  configNav;
  user: User;
  classSubMenu="bg-strongDark";
  seccionActual:string="insignias";
  constructor(private authSvc: AuthService) { 
this.configNav = { user: { name: true, nick: true, notification: true }, items: [{ name: 'Home', link: '/home', active: true }, { name: 'Inscribite Aqui!', link: '/register' }, { name: 'Login', link: '/login' }] };

 }

  ngOnInit(): void {
    this.authSvc.user$.subscribe(resp => {
      this.user = resp;
      console.log(resp);
      if (resp) {
        this.configNav = { user: { name: true, nick: true, notification: true }, items: [{ name: 'Home', link: '/home', active: true }, { name: 'Inscribite Aqui!', link: '/register' }] };
      }

    })
  }

  logOut() {
    this.authSvc.logout();
    this.configNav = { user: { name: true, nick: true, notification: true }, items: [{ name: 'Home', link: '/home', active: true }, { name: 'Inscribite Aqui!', link: '/register' }, { name: 'Login', link: '/login' }] };

  }
view(section:string){
  this.seccionActual = section;

}
  // seccionPerfil(){
  //   this.classSubMenu="bg-strongDark";
  //   this.seccionActual="PERFIL";
  // }

  // seccionInsignias(){
  //   this.classSubMenu="bg-semiStrongDark";
  //   this.seccionActual="INSIGNIAS";
  // }

  // seccionGrupos(){
  //   this.classSubMenu="bg-semilightDark";
  //   this.seccionActual="GRUPOS";
  // }

  // seccionEventos(){
  //   this.classSubMenu="bg-lightDark";
  //   this.seccionActual="EVENTOS";
  // }
}
