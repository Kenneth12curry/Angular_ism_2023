import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/shared/models/professeur';
import { ProfesseurService } from 'src/app/shared/services/professeur.service';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent {

  //Variable professeurs est utilisé dans component.html
  professeurs: Professeur[] = [];


  constructor(private professeurService: ProfesseurService,private router: Router) {}
 
  ngOnInit(): void {
    this.professeurService.getAllProfesseurs()
    .subscribe(data=>this.professeurs =data);
  }

}
