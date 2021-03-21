export class Grupos{


grupos:Grupo[]

}

export class Grupo{

  nombre: string;
  imagen: string;
  lenguage: string;
  descripcion: string;
  members: Member[];

}
export class Member{

uid:string;
image:string;

}