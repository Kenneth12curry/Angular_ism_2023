import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from 'src/app/shared/models/cours';
import { Module } from 'src/app/shared/models/module';
import { Professeur } from 'src/app/shared/models/professeur';
import { Salles } from 'src/app/shared/models/salles';
import { EtatLieu, EtatSessionCours, SessionCours } from 'src/app/shared/models/sessionCours';
import { CoursService } from 'src/app/shared/services/cours.service';
import { ModuleService } from 'src/app/shared/services/module.service';
import { ProfesseurService } from 'src/app/shared/services/professeur.service';
import { SallesService } from 'src/app/shared/services/salles.service';
import { SessionCoursService } from 'src/app/shared/services/sessionCours.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  
  // Initialisation d'un objet de type session cours
  sessionCours: SessionCours = {
    id: 0,
    date: undefined,
    heureDebut: undefined,
    heureFin: undefined,
    nbreHeure: 0,
    etat: EtatSessionCours.Planifier,
    lieu: EtatLieu.Enligne,
    cours: 0,
    sallescours: 0,
    professeur: 0,
    module: 0,
    salles: '',
    professeurName: ''
  };

  cours: Cours[] = [];
  professeurs: Professeur[] = [];
  salles: Salles[] = [];
  modules: Module[] = [];

  champsVides = false;

  constructor(
    private sessionCoursService: SessionCoursService,
    private sallesService: SallesService,
    private professeurService: ProfesseurService,
    private moduleService: ModuleService,
    private coursService:CoursService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sallesService.getSalles().subscribe((data) => (this.salles = data));
    this.professeurService.getAllProfesseurs().subscribe((data) => (this.professeurs = data));
    this.moduleService.getModule().subscribe((data) => (this.modules = data));
    this.coursService.getCours().subscribe((data) => (this.cours = data));
  }

  ajouterSessionCours(): void {
    if (this.verificationFormulaire()) {
      this.sessionCoursService.addSessionCours(this.sessionCours).subscribe(
        (response) => {
          console.log('Session de cours créée avec succès', response);
          this.sessionCours = {
            id: 0,
            date: undefined,
            heureDebut: undefined,
            heureFin: undefined,
            nbreHeure: 0,
            etat: EtatSessionCours.Planifier,
            lieu: EtatLieu.Enligne,
            cours: 0,
            sallescours: 0,
            professeur: 0,
            module: 0,
            salles: '',
            professeurName: ''
          };
          this.champsVides = false;
          this.router.navigateByUrl('/session-cours/liste-sc');
        },
        (error) => {
          console.log('Erreur lors de la création de la session de cours', error);
        }
      );
    } else {
      this.champsVides = true;
    }
  }

  verificationFormulaire(): boolean {
    return !!(
      this.sessionCours.date &&
      this.sessionCours.heureDebut &&
      this.sessionCours.heureFin &&
      this.sessionCours.etat &&
      this.sessionCours.lieu &&
      this.sessionCours.cours &&
      this.sessionCours.sallescours &&
      this.sessionCours.professeur &&
      this.sessionCours.module
    );
  }
}
