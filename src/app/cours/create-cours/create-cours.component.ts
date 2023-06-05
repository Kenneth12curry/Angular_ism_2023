import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { anneeScolaire } from 'src/app/shared/models/anneeScolaire';
import { Cours, EtatCours } from 'src/app/shared/models/cours';
import { Module } from 'src/app/shared/models/module';
import { Professeur } from 'src/app/shared/models/professeur';
import { anneeScolaireService } from 'src/app/shared/services/anneeScolaire.service';
import { CoursService } from 'src/app/shared/services/cours.service';
import { ModuleService } from 'src/app/shared/services/module.service';
import { ProfesseurService } from 'src/app/shared/services/professeur.service';

@Component({
  selector: 'app-create-cours',
  templateUrl: './create-cours.component.html',
  styleUrls: ['./create-cours.component.css']
})
export class CreateCoursComponent {
   // Initialisation d'un objet de type  cours
    cours: Cours = {
      id: 0,
      nbreHeureGlobal: 0,
      etat: EtatCours.Planfier,
      professeurName: '',
      moduleLibelle: '',
      professeur: 0,
      module: 0,
      anneeScolaireLibelle: '',
      anneeScolaire: 0
    }


  professeur: Professeur[] = [];
  module: Module[] = [];
  annee:anneeScolaire[]=[];

  champsVides = false;

  constructor(
    private professeurService: ProfesseurService,
    private moduleService: ModuleService,
    private coursService:CoursService,
    private anneeService:anneeScolaireService,
    private router: Router
  ) {}

  ngOnInit(): void {
  
    this.professeurService.getAllProfesseurs().subscribe((data) => (this.professeur = data));
    this.moduleService.getModule().subscribe((data) => (this.module = data));
    this.anneeService.getAnnee().subscribe((data) => (this.annee = data));
  
  }

  ajouterCours(): void {
    if (this.verificationFormulaire()) {
      this.coursService.addCours(this.cours).subscribe(
        (response) => {
          console.log(' cours créée avec succès', response);
          this.cours = {
              id: 0,
              nbreHeureGlobal: 0,
              etat: EtatCours.Planfier,
              professeurName: '',
              moduleLibelle: '',
              professeur: 0,
              module: 0,
              anneeScolaireLibelle: '',
              anneeScolaire: 0
            
          };
          this.champsVides = false;
          this.router.navigateByUrl('/cours/liste-cours');
        },
        (error) => {
          console.log('Erreur lors de la création du cours', error);
        }
      );
    } else {
      this.champsVides = true;
    }
  }

  verificationFormulaire(): boolean {
    return !!(
      this.cours.nbreHeureGlobal &&
      this.cours.professeur &&
      this.cours.module && this.cours.anneeScolaire
    );
  }
}
