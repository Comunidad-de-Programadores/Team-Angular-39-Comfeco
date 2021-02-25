import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '@app/shared/models/user.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,OnChanges {
  @Input() config:any;
  @Input() user:User;
  userNav:User;
  constructor() {



   }
  ngOnChanges(changes: SimpleChanges): void {
   this.userNav=changes.user.currentValue;
  }

  ngOnInit(): void {
    console.log( this.config);

  }

}
