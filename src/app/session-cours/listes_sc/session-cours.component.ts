import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtatSessionCours, SessionCours } from 'src/app/shared/models/sessionCours';
import { SessionCoursService } from 'src/app/shared/services/sessionCours.service';

@Component({
  selector: 'app-session-cours',
  templateUrl: './session-cours.component.html',
  styleUrls: ['./session-cours.component.css']
})
export class SessionCoursComponent implements OnInit{


 
  sessionCours:SessionCours[]=[];
  
  etatSession=EtatSessionCours.Planifier;

  constructor(private sessionCoursService: SessionCoursService,private router: Router) {}


  ngOnInit(): void {
    this.sessionCoursService.getSessionCoursEtats("Planifier")
    .subscribe(data=>this.sessionCours =data);

  }

  etats='';
  
  listerScByEtats(etat:string){
    this.sessionCoursService.getSessionCoursEtats(etat)
    .subscribe(data=>this.sessionCours =data);
     
   }

  
   annulerSc(id:number):void{
    this.sessionCoursService.annulerSession(id);
   }
  

}
