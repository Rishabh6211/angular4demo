import { Component, OnInit, ViewChild } from '@angular/core';
import {MdMenuModule, MdMenuTrigger} from '@angular/material';
import { CookieService } from 'ngx-cookie';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { Router, RouterModule} from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
 public data:any;
 public loading = false;
  lat: number = 30.7333;
  lng: number = 76.7794;
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
  
  	setTimeout(()=>{    
		    this.loading = false;
			console.log('loaderStopped');
		},2000);


   /* var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);*/
  

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
