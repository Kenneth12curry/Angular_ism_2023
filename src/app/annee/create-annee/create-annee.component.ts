import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { anneeScolaire } from 'src/app/shared/models/anneeScolaire';
import { anneeScolaireService } from 'src/app/shared/services/anneeScolaire.service';

@Component({
  selector: 'app-create-annee',
  templateUrl: './create-annee.component.html',
  styleUrls: ['./create-annee.component.css']
})
export class CreateAnneeComponent {
 
   //Initialisation d'un objet de type classe
   annee: anneeScolaire = {id : 0, libelle:''};
   champs=false;
  

  constructor(private anneeService: anneeScolaireService,private router: Router) {}
  
  ajouterAnnee(){
    if(this.verificationFormulaire()){
      this.anneeService.addAnnee(this.annee).subscribe(
        Response => {
          //Traitement 
          console.log('année crée avec succès',Response);
          this.annee = {id : 0, libelle:''};
          this.champs=false;
          //Redirection vers la pages qui affcihent la listes des classes
          this.router.navigateByUrl('/annee/liste-annee');

        },
        Error=>{
            //Traitement 
            console.log('error lors de la création de année',Response);
        }
      )

    }
    else{
      this.champs= true;
    }
  }

  verificationFormulaire(): boolean {
    return (
      !!this.annee.libelle 
    );  
  }

}
