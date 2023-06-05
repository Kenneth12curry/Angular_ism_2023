export interface User {
    //Les attributs d'une classe
    id:number;
    nom:string;
    prenom:string;
    login:string;
    password:string;
    role?: Role|string[];
    
}

export interface Professeur extends User{
    grade:string,
    specialite:string
}


export enum Role {
    Professeur,
  }