import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Professeur } from '../models/professeur';
import { SessionCours } from '../models/sessionCours';
import { Salles } from '../models/salles';

@Injectable({
  providedIn: 'root',
})

export class SallesService {
  private sallesServices: SallesService[] = [];
  private url =`${environment.API}/salles`
  
  constructor(private http:HttpClient) {}
 
  getSalles():Observable<Salles[]>  {
    return this.http.get<Salles[]>(`${this.url}/liste-salles`);
  
    }

  //Méthode d'ajout 
  addSalles(salles: Salles):Observable<Salles>{
      return this.http.post<Salles>(`${this.url}/add-salles`,salles)
  }

}
