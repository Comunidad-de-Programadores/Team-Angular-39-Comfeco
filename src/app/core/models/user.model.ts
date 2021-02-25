
export class user {

name:string;
nickName?:string;
userId?:string;
isLider?:boolean;
email?:string;
whatsapp?:string;
discordUser?:string;
discordAlias?:string;
level?:number;
token?:string;
lastVisited?:Date;
team?:boolean;
teamId?:string;
photo?:string;
seniority?:string;


/**
 *
 */
constructor(name, level,teamId,isLider ) {
 this.name=name;
 this.level=level;
 this.teamId=teamId;
 this.isLider=isLider;
  
}

}