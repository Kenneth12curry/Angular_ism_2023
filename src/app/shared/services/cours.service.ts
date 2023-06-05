import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root',
})

export class CoursService {
  private cours: Cours[] = [];
  private url =`${environment.API}/cours`
  constructor(private http:HttpClient) {}
 
  getCours():Observable<Cours[]>  {
    return this.http.get<Cours[]>(`${this.url}/liste-cours`);
    }

  //Méthode d'ajout 
  addCours(cours: Cours):Observable<Cours>{
      return this.http.post<Cours>(`${this.url}/add-cours`,cours);
  }

  getCoursEtat(etat:string):Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.url}/liste-cours-etat/${etat}`);
  }

}
