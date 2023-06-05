
export interface Rp{
     //Les attributs d'une classe
     id:number;
     nom:string;
     prenom:string;
     login:string;
     password:string;
     role?: Role|string[];

}


export enum Role {
    RP,
  }