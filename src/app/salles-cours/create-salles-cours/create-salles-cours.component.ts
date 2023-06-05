import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salles } from 'src/app/shared/models/salles';
import { SallesService } from 'src/app/shared/services/salles.service';

@Component({
  selector: 'app-create-salles-cours',
  templateUrl: './create-salles-cours.component.html',
  styleUrls: ['./create-salles-cours.component.css']
})
export class CreateSallesCoursComponent {

   //Initialisation d'un objet de type classe
   salles: Salles= {
     id: 0,
     nom: '',
     numero: '',
     nbrePlaces: ''
   }
   champs=false;
  

  constructor(private sallesService: SallesService,private router: Router) {}
  
  ajouterSalle(){
    if(this.verificationFormulaire()){
      this.sallesService.addSalles(this.salles).subscribe(
        Response => {
          //Traitement 
          console.log('salles crée avec succès',Response);
          this.salles = {
            id: 0,
            nom: '',
            numero: '',
            nbrePlaces: ''
          }
          this.champs=false;
          //Redirection vers la pages qui affcihent la listes des salles
          this.router.navigateByUrl('/salles-cours/liste-salles');

        },
        Error=>{
            //Traitement 
            console.log('erreur lors de la création de la salle',Response);
        }
      )

    }
    else{
      this.champs= true;
    }
  }

  verificationFormulaire(): boolean {
    return (
      !!this.salles.nom && !! this.salles.numero && !!this.salles.nbrePlaces
    );  
  }

}
