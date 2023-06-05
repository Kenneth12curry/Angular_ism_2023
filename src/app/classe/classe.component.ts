import { Component, OnInit } from '@angular/core';
import { Classe } from '../shared/models/classe';
import { Router } from '@angular/router';
import { ClasseService } from '../shared/services/classe.service';


@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
//abonnement
export class ClasseComponent implements OnInit{

  //Variable classes est utilisé dans component.html
  classes: Classe[] = [];

  //Initialisation d'un objet de type classe
  classe: Classe = {id : 0, libelle:'', filiere: '', niveau: ''};
  champs=false;


  constructor(private classeService: ClasseService,private router: Router) {}
 
  ngOnInit(): void {
    this.classeService.getAllClasses()
    .subscribe(data=>this.classes =data);
  }

}
