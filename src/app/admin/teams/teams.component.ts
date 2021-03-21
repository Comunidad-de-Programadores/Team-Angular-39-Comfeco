import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TeamsPanel } from '@app/core/teamsPanelAdmin';
import { Board } from '../../core/models/board.model';
import { Team } from '../../core/models/team.model';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent extends TeamsPanel implements OnInit {

  constructor() {
    super();
  }

  board = new Board('angular', [
    new Team('Angular23', [
      new User('Pedro', 23, 'id1',true),
      new User('Juan', 23, 'id1',false),
      new User('Geremias', 23, 'id1', false)
    ],
    'id1'
    ),
    new Team('Angular39', [
      new User('Jesse', 23, 'id2', false),
      new User('Diego', 23, 'id2', false),
      new User('Omar', 23, 'id2', false),
      new User('Jonathan', 23, 'id2', false),
      new User('Pablo', 23, 'id2', true),
         ],
      'id2'),
    new Team('Angular33', [
      new User('Lucia', 23, 'id3', false),
      new User('Robert', 23, 'id3', false),
      new User('Julio', 23, 'id3', false),
      new User('Francisco', 23, 'id3', true),
      new User('Rocio', 23, 'id3', false),
     
    ],
      'id3'),
    new Team('Angular24', [
      new User('German', 23, 'id4', false),
      new User('Victor', 23, 'id4', false),
      new User('Hernesto', 23, 'id4', false),
      new User('Vilma', 23, 'id4', true),
      new User('Analia', 23, 'id4', false),
    ],
      'id4')
  ]);

  ngOnInit() {

  }

  

}
