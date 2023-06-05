import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Professeur } from '../models/professeur';
import { SessionCours } from '../models/sessionCours';

@Injectable({
  providedIn: 'root',
})

export class SessionCoursService {
  private sessionCours: SessionCours[] = [];
  private url =`${environment.API}/session-cours`
  
  constructor(private http:HttpClient) {}
 
  getSessionCours():Observable<SessionCours[]>  {
    return this.http.get<SessionCours[]>(`${this.url}/liste-session-cours`);

    }

  //Méthode d'ajout 
  addSessionCours(sessionCours: SessionCours):Observable<SessionCours>{
      return this.http.post<SessionCours>(`${this.url}/add-session-cours`,sessionCours);
  }

  getSessionCoursEtats(etat:string):Observable<SessionCours[]>{
     return this.http.get<SessionCours[]>(`${this.url}/liste-session-cours-etat/${etat}`);
  }

  annulerSession(id:number): void{
    this.http.get<SessionCours[]>(`${this.url}/annuler-session/${id}`);
  }

}
