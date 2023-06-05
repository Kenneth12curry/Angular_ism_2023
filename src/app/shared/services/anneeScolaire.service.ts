import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Classe } from '../models/classe';
import { anneeScolaire } from '../models/anneeScolaire';

@Injectable({
  providedIn: 'root',
})

export class anneeScolaireService {
  private classe: Classe[] = [];
  private url =`${environment.API}/annee/liste-annee`
  private url1 =`${environment.API}/annee/add-annee`

  constructor(private http:HttpClient) {}
 
  getAnnee():Observable<anneeScolaire[]>  {
    return this.http.get<anneeScolaire[]>(this.url);
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
  addAnnee(annee: anneeScolaire):Observable<anneeScolaire>{
      return this.http.post<Classe>(this.url1,annee)
  }
  
  /*getProductById(id: number): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${this.url}/${id}`);
    /*let product = this.products.find((p) => p.id == id) as Product;
    let products = this.products.filter(
      (p) => p.categorie == product.categorie && p.id != id
    ) as Product[];
    return {
      product: product,
      products: products,
    } as ProductDetail;
  }*/

}
