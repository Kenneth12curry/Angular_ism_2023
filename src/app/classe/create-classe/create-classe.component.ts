import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from 'src/app/shared/models/classe';
import { ClasseService } from 'src/app/shared/services/classe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-classe',
  templateUrl: './create-classe.component.html',
  styleUrls: ['./create-classe.component.css']
})
export class CreateClasseComponent {

   //Initialisation d'un objet de type classe
   classe: Classe = {id : 0, libelle:'', filiere: '', niveau: ''};
   champs=false;
  

  constructor(private classeService: ClasseService,private router: Router) {}
  
  ajouterClasse(){
    if(this.verificationFormulaire()){
      this.classeService.addClasse(this.classe).subscribe(
        Response => {
          //Traitement 
          console.log('classe crée avec succès',Response);
          this.classe = {id : 0, libelle:'', filiere: '', niveau: ''};
          this.champs=false;
          //Redirection vers la pages qui affcihent la listes des classes
          this.router.navigateByUrl('/classe/liste-classe');

        },
        Error=>{
            //Traitement 
            console.log('error lors de la création de la classe',Response);
        }
      )

    }
    else{
      this.champs= true;
    }
  }

  verificationFormulaire(): boolean {
    return (
      !!this.classe.libelle && !! this.classe.niveau && !!this.classe.filiere
    );  
  }

}
