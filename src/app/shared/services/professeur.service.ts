import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Professeur } from '../models/professeur';

@Injectable({
  providedIn: 'root',
})

export class ProfesseurService {
  private professeur: Professeur[] = [];
  private url =`${environment.API}/professeur`
  
  constructor(private http:HttpClient) {}
 
  getAllProfesseurs():Observable<Professeur[]>  {
    return this.http.get<Professeur[]>(`${this.url}/liste-professeur`);
   /* for (let index = 1; index <= 20; index++) {
      this.products.push({
        id: index,
        libelle: `Article${index}`,
        oldPrice: index * 10000,
        newPrice: index * 20000,
        qteStock: index * 10,
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        saled: index % 2 == 0,
        categorie: index % 2 == 0 ? 'Alimentaire' : 'Cosmerique',
      });
       return this.products;
      */
    }

  //Méthode d'ajout 
  addProfesseur(professeur: Professeur):Observable<Professeur>{
      return this.http.post<Professeur>(`${this.url}/add-professeur`,professeur)
  }

}
