import { Component, Input, OnInit } from '@angular/core';
import { Grupos } from '@app/core/models/grupos.model';
import { User } from '@app/core/models/user.model';
import { GroupService } from '@app/core/services/group.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
@Input() user:User;
  grupos: Grupos;
  constructor(private gruposS:GroupService) {
  this.gruposS.loadGroups().subscribe(resp=>{

this.grupos=resp;

  })
setTimeout(() => {
  for (let index = 0; index < this.grupos.grupos.length; index++) {
   
    for (let index2 = 0; index2 < this.grupos.grupos[index].members.length; index2++) {
     
      if (this.grupos.grupos[index].members[index2].uid === this.user.uid) {
        
        let image = document.getElementById('image' + index);
        let button = document.getElementById('button' + index);
        image.style.display = 'none';
        button.style.display = 'none';


      }
    }

  }
}, 60);


 }

  ngOnInit(): void {
  }
  joinGroup(grupo:any){

console.log(grupo);

}
}
