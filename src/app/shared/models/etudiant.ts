import { User } from "./professeur";

export interface Etudiant extends User{
    matricule:string,
    tuteur:string
}