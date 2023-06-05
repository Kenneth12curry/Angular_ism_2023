import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classe } from 'src/app/shared/models/classe';
import { Cours } from 'src/app/shared/models/cours';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { ClasseService } from 'src/app/shared/services/classe.service';
import { CoursService } from 'src/app/shared/services/cours.service';
import { EtudiantService } from 'src/app/shared/services/etudiant.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit{



  etudiants: Etudiant[] = [];
  cours:Cours[]=[];
  classes:Classe[]=[];

  constructor(private etudiantService: EtudiantService, private coursService:CoursService,private classeService:ClasseService,private router: Router,private http:HttpClient) {}

  ngOnInit(): void {
    this.etudiantService.getEtudiants()
    .subscribe(data=>this.etudiants =data);

    this.coursService.getCours()
    .subscribe(data=>this.cours =data);

    this.classeService.getAllClasses()
    .subscribe(data=>this.classes =data);

  }


  selectedCoursId: number=0;

  listeEtudiantsCours(id:number){
   this.etudiantService.getEtudiantsCours(id)
   .subscribe(data=>this.etudiants =data);
    
  }

  selectedClassesId: number=0;

  listeEtudiantsClasses(id:number){
   this.etudiantService.getEtudiantsClasses(id)
   .subscribe(data=>this.etudiants =data);
    
  }

  listerEtudiants(){
    this.etudiantService.getEtudiants()
    .subscribe(data=>this.etudiants =data);
  }


  private base_url=`${environment.API}/excel/import-excel`

  selectedFile!: File;


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  importExcel(event: Event) {
    event.preventDefault();

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post( this.base_url, formData)
        .subscribe(
          (response) => {
            console.log('Import successful', response);
            // Réalisez toute autre action nécessaire après l'importation
          },
          (error) => {
            console.error('Import failed', error);
            // Gérez les erreurs lors de l'importation
          }
        );
    } else {
      // Gérez le cas où aucun fichier n'a été sélectionné
    }
  }




}
