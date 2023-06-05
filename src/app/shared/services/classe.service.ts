import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Classe } from '../models/classe';

@Injectable({
  providedIn: 'root',
})

export class ClasseService {
  private classe: Classe[] = [];
  private url =`${environment.API}/classe/liste-classe`
  private url1 =`${environment.API}/classe/add-classe`

  constructor(private http:HttpClient) {}
 
  getAllClasses():Observable<Classe[]>  {
    return this.http.get<Classe[]>(this.url);
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
  addClasse(classe: Classe):Observable<Classe>{
      return this.http.post<Classe>(this.url1,classe)
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
