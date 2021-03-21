import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-events',
  templateUrl: './card-events.component.html',
  styleUrls: ['./card-events.component.css']
})
export class CardEventsComponent implements OnInit {

  cards=[];
  constructor() {
    this.cards = Array.from({ length: 5 }).map(
      (el, index) => `cards ${index + 1}`
    );
  }

  ngOnInit(): void {
  }

}
