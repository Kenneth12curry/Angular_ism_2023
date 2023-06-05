import { Time } from "@angular/common";
import { Salles } from "./salles";
import { Professeur } from "./professeur";
import { Module } from "./module";

export interface SessionCours {
    //Les attributs d'une session de cours
    id:number;
    date:Date | undefined;
    heureDebut:Time | undefined;
    heureFin:Time | undefined;
    nbreHeure:number;
    cours:number,
    etat:EtatSessionCours
    lieu:EtatLieu,
    sallescours:number;
    professeur:number,
    module:number;
    salles: string,
	professeurName:string
    

}

export enum EtatSessionCours{
   "Planifier","Valider","Annuler","Invalider","Faits"
}
export enum EtatLieu{
    "Enligne","Présentiel"
}