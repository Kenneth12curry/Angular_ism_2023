import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salles } from 'src/app/shared/models/salles';
import { SallesService } from 'src/app/shared/services/salles.service';


@Component({
  selector: 'app-salles-cours',
  templateUrl: './salles-cours.component.html',
  styleUrls: ['./salles-cours.component.css']
})
export class SallesCoursComponent implements OnInit {

  //Variable classes est utilisé dans component.html
  salles: Salles[] = [];

  constructor(private salleService: SallesService,private router: Router) {}
 
  ngOnInit(): void {
    this.salleService.getSalles()
    .subscribe(data=>this.salles =data);
  }

}
