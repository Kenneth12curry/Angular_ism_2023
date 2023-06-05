import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Professeur } from '../models/professeur';
import { Module } from '../models/module';

@Injectable({
  providedIn: 'root',
})

export class ModuleService {
  private module: Module[] = [];
  private url =`${environment.API}/module`
  
  constructor(private http:HttpClient) {}
 
  getModule():Observable<Module[]>  {
    return this.http.get<Module[]>(`${this.url}/liste-module`);
    }

  //Méthode d'ajout 
  addModule(module: Module):Observable<Module>{
      return this.http.post<Module>(`${this.url}/add-module`,module)
  }

}
