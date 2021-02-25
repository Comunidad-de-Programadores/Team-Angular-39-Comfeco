import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TeamLider } from '@app/core/models/team.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
@Input() tipo:string;
@Input() image:string;
@Input() name:string; 

teams: TeamLider[]=[];
filter:TeamLider[]=[];
containerCards: HTMLElement;
currentValue:any;
  constructor() {

    this.teams = [new TeamLider( 

'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
'Bezael', 
'Angular'

 ),
new TeamLider( 

 'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
'Otro Bezael', 
 'Angular'

 ),
new TeamLider(

'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
'Otro Bezael',
'Angular'

),
new TeamLider(

'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
'Otro Bezael',
'Angular'

),
new TeamLider(

'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
'Otro Bezael',
'Angular'

      ), new TeamLider(
      'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
      'Bezael',
      'Svelte'

 ),
      new TeamLider(

        'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
        'Otro Bezael',
        'Svelte'

      ),
      new TeamLider(

        'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
        'Otro Bezael',
        'Svelte'

      ),
      new TeamLider(

        'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
        'Otro Bezael',
        'Svelte'

      ),
      new TeamLider(

        'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
        'Otro Bezael',
        'Svelte'

      ), new TeamLider(
      'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
      'Bezael',
      'React'

 ),
      new TeamLider(

        'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
        'Otro Bezael',
        'React'

      ),
      new TeamLider(

        'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
        'Otro Bezael',
        'React'

      ),
      new TeamLider(

        'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
        'Otro Bezael',
        'React'

      ),
      new TeamLider(

        'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
        'Otro Bezael',
        'React'

      )

]



 }
ngOnChanges(changes: SimpleChanges): void {
 
this.searchTeam();

  
  if (changes.tipo.currentValue==='React' ){

    this.containerCards.style.animation = 'loadCard 900ms cubic-bezier(0.25, 1, 0.5, 1)';
    this.containerCards.style.opacity = '1';
   
}else{

    this.containerCards.style.animation = 'loadCardMobile 900ms cubic-bezier(0.25, 1, 0.5, 1)';
    this.containerCards.style.opacity = '1';

}
  
console.log(changes.tipo.currentValue);
 
 
 
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.loadScrollAnimations, true);
    this.containerCards = document.getElementById('containerCards');
   

  }

searchTeam(){

  this.filter = this.teams.filter(teams => teams.team === this.tipo);
  console.log(this.filter);}


  loadScrollAnimations(e){

    let scrollValue = e.srcElement.scrollingElement.scrollTop / 100;

    let screenHeigh = window.innerWidth;
    console.log(screenHeigh);
    console.log(scrollValue);


    if (screenHeigh < 768 && scrollValue > 11){

      this.containerCards.style.animation = 'loadCard 900ms cubic-bezier(0.25, 1, 0.5, 1)';
      this.containerCards.style.opacity='1';


    }


}

  public getScreen(): number {
    let screenHeigh = window.innerWidth;
    console.log('Ancho pantalla: ' + screenHeigh);
    return screenHeigh;
  }
}
