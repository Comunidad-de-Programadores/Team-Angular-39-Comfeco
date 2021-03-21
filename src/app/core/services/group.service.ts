
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupos } from '../models/grupos.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {




  constructor(private http: HttpClient) {
    //console.log('Working service');
    


  }

    loadGroups():Observable<Grupos> {
    
/**
*Modificar json con los id de los usuarios correspondientes
*/
      return this.http.get<Grupos>('./../assets/api/groups.json');
       

  }

}