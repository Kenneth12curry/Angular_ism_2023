import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from 'src/app/shared/models/cours';
import { CoursService } from 'src/app/shared/services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit{

  //Variable cours est utilisé dans component.html
  cours: Cours[] = [];


  constructor(private coursService: CoursService,private router: Router) {}

  ngOnInit(): void {
    this.coursService.getCours()
    .subscribe(data=>this.cours =data);
  }

  etats='';
  
  listerCoursByEtats(etat:string){
    this.coursService.getCoursEtat(etat)
    .subscribe(data=>this.cours =data);
     
   }

}
