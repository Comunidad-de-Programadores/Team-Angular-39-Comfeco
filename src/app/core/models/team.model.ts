import { user } from "./user.model";

export class Team {
  teamId?:string;
  name:string;
  complete?:boolean;
  teamCount?:number;
  usersTeam?:user[];
  tokenArray?:string[];
  discordChannel?:boolean;
  notify?:boolean;
 


  constructor(name, usersTeam, teamId) {

    this.name=name;
    this.usersTeam=usersTeam
    this.teamId=teamId;
   }
}

export class TeamLider{

image:string;
name:string;
team: string;
/**
 *
 */
constructor(image:string, name:string, team:string) {
 this.image=image;
this.name=name;
this.team=team;
  
}
}