import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professeur, User } from '../models/professeur';
import { Rp } from '../models/Rp';


@Injectable({
  providedIn: 'root',
})
export class SecuriteService {

  user: User[] = [];
    // userConnect!: Client | null;
  isConnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private url = `${environment.API}/security`;
  constructor(private http: HttpClient) {}
  /*initClient() {
    this.clients.push({
      id: 2,
      nomComplet: 'Birane Baila Wane',
      login: 'client',
      password: 'client',
      role: Role.Client,
    });
  }*/

  connexion(login: string, password: string): Observable<User> {
    /* this.userConnect = this.clients.find(
      (user) => user.login == login && user.password == password
    ) as Client;
    this.isConnect.next(this.userConnect != null);*/
    return this.http.post<User>(`${this.url}/login`, {
      login: login,
      password: password,
    });
  }

  logout() {
    //this.userConnect = null;
    this.isConnect.next(false);
    this.removeUser();
  }

  readonly userKey = environment.USERKEY;
  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }
  saveUser(user: User): void {
     this.isConnect.next(true)
     localStorage.setItem(this.userKey, JSON.stringify(this.user));
  }

  getUser(): User | null {
    const user = localStorage.getItem(this.userKey);
    if (user != null) {
      return JSON.parse(user) as User;
    }
    return null;
  }

}
