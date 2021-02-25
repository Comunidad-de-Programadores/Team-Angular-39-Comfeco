import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  currenTime;
  constructor() { }

  ngOnInit(): void {
      this.countdown(new Date("December 24, 2021 00:00:00"));
  }
  getTime(dateTo) {
      let now = new Date(),
          time = ( <any>new Date(dateTo) - <any>now + 1000) / 1000,
          seconds = ('0' + Math.floor(time % 60)).slice(-2),
          minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
          hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
          days = Math.floor(time / (3600 * 24));
  
      return {
          seconds,
          minutes,
          hours,
          days,
          time
      }
  };
 
  countdown(dateTo){
    const timerUpdate = setInterval( () => {
        this.currenTime = this.getTime(dateTo);
        //console.log(this.currenTime);
        
        if (this.currenTime.time <= 1) {
            clearInterval(timerUpdate);
            alert('Fin de la cuenta ');
        }
    }, 1000);
  };










}
