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