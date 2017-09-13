import { Injectable } from '@angular/core';
import {Router,RouterModule} from '@angular/router';
import 'rxjs/add/operator/map'
import  {Http, Response} from '@angular/http'

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  userLogin(user){

  	let email:string = user.email;
  	let password:string = user.password;

  	let body = {
  		'email':email,
  		'password':password
  	}

  	return this.http.get('./assets/data/user.json',body).map((res:Response)=>res.json())
  }

}
