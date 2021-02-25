import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { user } from '@app/core/models/user.model';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit, OnChanges {
@Input() users:user[];
totalLevel:number=0;
  constructor() {


   }
  ngOnChanges(changes: SimpleChanges): void {
     
    this.totalLevel = 0;
    this.users.forEach(user => {
     
     
      this.totalLevel += user.level
    })
  }

  ngOnInit(): void {
   
    // this.users.forEach(user => {
    //   this.totalLevel += user.level
    // })
  }

}
