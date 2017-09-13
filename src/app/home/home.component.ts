import { Component, OnInit, ViewChild } from '@angular/core';
import {MdMenuModule, MdMenuTrigger} from '@angular/material';
import { CookieService } from 'ngx-cookie';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
 public data:any;
 public loading = false;

 public imageSources: string[] = [
     'assets/images/1.jpg',
     'assets/images/2.jpg',
     'assets/images/3.jpg'
  ];
  
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768,
  };
  constructor(private cookieService: CookieService,private _route:Router) {
   }

  ngOnInit() {
  	this.loading = true;
  	this.data = this.cookieService.getObject('data');
  	console.log("cookie",this.cookieService.getObject('data'));
  	setTimeout(()=>{    
		    this.loading = false;
			console.log('loaderStopped');
		},2000);

  }
  logout(){
    this.cookieService.removeAll();
    this._route.navigate(['/login']);
  }
  pagination(){
     this.loading = true;
     
    this._route.navigate(['/pagination']);
    setTimeout(()=>{    
        this.loading = false;
      console.log('loaderStopped');
    },2000);
  }


}
