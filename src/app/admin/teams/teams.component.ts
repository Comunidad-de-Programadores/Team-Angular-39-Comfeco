import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TeamsPanel } from '@app/core/teamsPanelAdmin';
import { Board } from '../../core/models/board.model';
import { Team } from '../../core/models/team.model';
import { user } from '../../core/models/user.model';

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
      new user('Pedro', 23, 'id1',true),
      new user('Juan', 23, 'id1',false),
      new user('Geremias', 23, 'id1', false)
    ],
    'id1'
    ),
    new Team('Angular39', [
      new user('Jesse', 23, 'id2', false),
      new user('Diego', 23, 'id2', false),
      new user('Omar', 23, 'id2', false),
      new user('Jonathan', 23, 'id2', false),
      new user('Pablo', 23, 'id2', true),
         ],
      'id2'),
    new Team('Angular33', [
      new user('Lucia', 23, 'id3', false),
      new user('Robert', 23, 'id3', false),
      new user('Julio', 23, 'id3', false),
      new user('Francisco', 23, 'id3', true),
      new user('Rocio', 23, 'id3', false),
     
    ],
      'id3'),
    new Team('Angular24', [
      new user('German', 23, 'id4', false),
      new user('Victor', 23, 'id4', false),
      new user('Hernesto', 23, 'id4', false),
      new user('Vilma', 23, 'id4', true),
      new user('Analia', 23, 'id4', false),
    ],
      'id4')
  ]);

  ngOnInit() {

  }

  

}
