import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Insignias } from '../models/insignias.model';
import { InsigniasUser, User } from '../models/user.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class SkillService {
insignias: Insignias[];
insignias$:Observable<Insignias[]>;
user:User;
  constructor(public authS: AuthService) {this.initInsignias();}


  async updateInsignia(tipo: string) {

    let position = this.insignias.findIndex(el => el.tipo === tipo);
console.log(position);
    if (position > -1) {

      this.insignias[position].isActive = true;

      const insigniaWin: InsigniasUser = { tipo: tipo, state: true };
      try {
        this.user.insignias.push(insigniaWin)

      } catch {

        let newInsignia = [insigniaWin]
        let newUser = { ...this.user, insignias: newInsignia };
        this.user = newUser;

      }
      console.log(this.user);
      this.authS.updateUserData(this.user, { insignias: this.user.insignias })

    }



  }
initInsignias(){

  this.insignias = [
    new Insignias('sociable', 'sociable', 'Eres muy sociable por ello te recompensamos!', 'Debes Compartir tu información con la comunidad (Redes, Biografía, etc)', false),
    new Insignias('experto', 'experto', 'prueba descripcion', 'se gana asi', false),
    new Insignias('productivo', 'productivo', 'prueba descripcion', 'se gana asi', false),
    new Insignias('soporte', 'soporte', 'prueba descripcion', 'se gana asi', false),
    new Insignias('detective', 'detective', 'prueba descripcion', 'se gana asi', false),

  ];
  try {

    this.authS.user$.subscribe(user => {
      this.user = user;
      console.log(user);
      if (user.insignias) {
        console.log('dentro');
        const insigniasObtenidas = user.insignias;

        insigniasObtenidas.forEach(el => {

          switch (el.tipo) {
            case 'sociable':

              this.insignias[0].isActive = true;
              break;
            case 'experto':
              this.insignias[1].isActive = true;
              break;
            case 'productivo':
              this.insignias[2].isActive = true;
              break;
            case 'soporte':
              this.insignias[3].isActive = true;
              break;
            case 'detective':
              this.insignias[4].isActive = true;
              break;

            default:
              break;
          }

        })


      }


    });




  } catch { }

  this.loadInsignias();

}
  loadInsignias() {

    this.insignias$ = new Observable(subscribe => {

      subscribe.next(this.insignias);



    });
  }


}
