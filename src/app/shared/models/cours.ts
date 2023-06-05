export interface Cours {
    //Les attributs d'un cours
    id:number;
    nbreHeureGlobal:number,
    etat:EtatCours,
    professeurName:string,
    moduleLibelle:string,
    professeur:number,
    module:number;
    anneeScolaireLibelle:string,
    anneeScolaire:number;

}

export enum EtatCours{
    "Planfier","En cours","Terminer"
}