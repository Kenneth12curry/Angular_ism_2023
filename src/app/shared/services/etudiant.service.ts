import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Professeur } from '../models/professeur';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root',
})

export class EtudiantService {
  private etudiants: Etudiant[] = [];
  private url =`${environment.API}/etudiants`
  //private base_url=`${environment.API}/excel/export-excel`
  
  constructor(private http:HttpClient) {}
 
  getEtudiants():Observable<Etudiant[]>  {
    return this.http.get<Etudiant[]>(`${this.url}/liste-etudiants`);
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

   getEtudiantsCours(id: number):Observable<Etudiant[]> {
      return this.http.get<Etudiant[]>(`${this.url}/liste-etudiants/${id}`);
    }

    getEtudiantsClasses(id: number):Observable<Etudiant[]> {
      return this.http.get<Etudiant[]>(`${this.url}/liste-etudiants-classes/${id}`);
    }


    /*exportToExcel(file: File) {
      const formData = new FormData();
      formData.append('file', file);
  
      return this.http.post(this.base_url, formData);
    }*/
  //Méthode d'ajout 
  /*addEtudiant(etudiant: Etudiant):Observable<Etudiant>{
      return this.http.post<Etudiant>(`${this.url}/add-etudiant`,etudiant)
  }*/

}
