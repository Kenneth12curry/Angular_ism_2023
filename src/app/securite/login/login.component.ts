import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/professeur';
import { SecuriteService } from 'src/app/shared/services/securite.service';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
page!: string;
user: User = {
  login: '',
  password: '',
  role: [],
  id: 0,
  nom: '',
  prenom: ''
};
isLoginFailed: boolean = true;
errorMessage: string = '';

constructor(
private route: ActivatedRoute,
private secService: SecuriteService,
private router: Router
) {}

ngOnInit(): void {
this.route.queryParams.subscribe((params) => {
this.page = params['page'];
});
}

onConnexion(){
if(this.page == 'login')
{
this.secService.connexion(this.user.login, this.user.password)
.subscribe({
next:(user)=>{
this.isLoginFailed = true;
//Enregistrement du User dans le LocalStorage
this.secService.saveUser(user);
this.router.navigateByUrl('/classe/liste-classe');

},
error:(err)=>{
this.isLoginFailed = false;
this.errorMessage = err.error.message;
}
}

);

}
}
}