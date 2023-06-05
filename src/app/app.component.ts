import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ges_planification_ism_2023';

  constructor(private router: Router) {}

  isRoute(): boolean {
    const allowedRoutes = ['/classe/liste-classe','/classe/add-classe', '/cours/liste-cours', 
    '/cours/add-cours','/professeur/liste-professeur','/professeur/create-professeur','/session-cours/liste-sc',
    '/session-cours/create-sc','/etudiants/liste-etudiants','/salles-cours/liste-salles','/salles-cours/create-salles','/annee/liste-annee','/annee/create-annee'];
    return allowedRoutes.includes(this.router.url);
  }

  isSecurite(): boolean{
    const allowedRoutes = ['http://localhost:4200/','/securite/login'];
    return allowedRoutes.includes(this.router.url);
  }


}
