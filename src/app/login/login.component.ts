import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  public loading = false;
	public nuser = {
		email:'',
		password:''
	}
	public user ='';

  constructor(private _router: Router, 
              private loginservice:LoginService,
              private _flashMessagesService: FlashMessagesService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.loading = true;
      setTimeout(()=>{    
        this.loading = false;
      console.log('loaderStopped');
    },2000);
  }

 submit(){
 	this.loginservice.userLogin(this.nuser).subscribe(res =>{
 		
    for(var i=0;i<res.length;i++){
      if(res[i].email == this.nuser.email && res[i].password == this.nuser.password){
        let cookieData = {
                        
                        "username" :res[i].username,
                        "email" :res[i].email
                 };
          this.cookieService.putObject( 'data', cookieData);
          
         this._flashMessagesService.show('Successfully login', { cssClass: 'alert-success', timeout: 1000 });
        this._router.navigate(['/home'])
        return false;
      }
      else{
        if(i==1){
          this._flashMessagesService.show('Invalid User', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }
    }

 	});
 }
}
