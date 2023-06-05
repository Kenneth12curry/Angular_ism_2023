import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/shared/models/professeur';
import { ProfesseurService } from 'src/app/shared/services/professeur.service';

@Component({
  selector: 'app-create-professeurs',
  templateUrl: './create-professeurs.component.html',
  styleUrls: ['./create-professeurs.component.css']
})
export class CreateProfesseursComponent {

   //Initialisation d'un objet de type classe
   professeur: Professeur = {
     id: 0,
     grade: '',
     specialite: '',
     nom: '',
     prenom: '',
     login: '',
     password: ''
     
   };
   champs=false;

  constructor(private professeurService: ProfesseurService,private router: Router) {}
  
  ajouterProfesseur(){
    if(this.verificationFormulaire()){
      this.professeurService.addProfesseur(this.professeur).subscribe(
        Response => {
          //Traitement 
          console.log('classe crée avec succès',Response);
          this.professeur = { id: 0, grade: '', specialite: '', nom: '', prenom: '',login: '',password: ''};
          this.champs=false;
          //Redirection vers la pages qui affcihent la listes des professeurs
          this.router.navigateByUrl('/professeur/liste-professeur');

        },
        Error=>{
            //Traitement 
            console.log('error lors de la création du professeur',Response);
        }
      )

    }
    else{
      this.champs= true;
    }
  }

  verificationFormulaire(): boolean {
    return (
      !!this.professeur.nom && !! this.professeur.prenom && !!this.professeur.grade && !!this.professeur.specialite
    );  
  }
}
