import { Component, Input, OnInit } from '@angular/core';
import { Insignias } from '@app/core/models/insignias.model';

@Component({
  selector: 'app-insignia',
  templateUrl: './insignia.component.html',
  styleUrls: ['./insignia.component.css']
})
export class InsigniaComponent implements OnInit {
@Input() insignias:Insignias[];
  constructor() { }

  ngOnInit(): void {
  }

}
