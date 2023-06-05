import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { anneeScolaire } from 'src/app/shared/models/anneeScolaire';
import { anneeScolaireService } from 'src/app/shared/services/anneeScolaire.service';

@Component({
  selector: 'app-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css']
})
export class AnneeComponent {
   //Variable classes est utilisé dans component.html
   annee: anneeScolaire[] = [];

   constructor(private anneeService: anneeScolaireService,private router: Router) {}
  
   ngOnInit(): void {
     this.anneeService.getAnnee()
     .subscribe(data=>this.annee =data);
   }
   

}
