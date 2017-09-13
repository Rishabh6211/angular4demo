import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RegisterationComponent} from './registeration/registeration.component';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MdMenuModule, MdMenuTrigger} from '@angular/material';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { StringFilterPipe }    from './pagination/filter';
import { ImageComponent } from './image/image.component';
import {PaginationService} from './pagination/pagination.service';
import { Http, Response, HttpModule,ConnectionBackend } from '@angular/http';
import  {SortGridPipe} from './pagination/sorting';
import { ImageModalComponent } from './image-modal/image-modal.component'
import { LoadingModule } from 'ngx-loading';
import { CookieModule } from 'ngx-cookie';
import { CarouselModule } from 'angular4-carousel';
export const routes: Routes =[

{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
},  
{
	path:'register',
	component:RegisterationComponent,
	// loadChildren: './home/home.module#HomeModule'
	 
},
{
  path:'login',
  component:LoginComponent,   
},
{
  path:'home',
  component:HomeComponent,   
},
{
  path:'pagination',
  component:PaginationComponent,   
}
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    HomeComponent,
    PaginationComponent,
    StringFilterPipe,
    ImageComponent,
    SortGridPipe,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    MdMenuModule,
    NgxPaginationModule,
    FlashMessagesModule,
    HttpModule,
    LoadingModule,
    CarouselModule,
    CookieModule.forRoot(), 
    RouterModule.forRoot(routes)
    /*RouterModule.forRoot([
	  	{
		    path: 'register',
		    component: RegisterationComponent
	  	}
	])  */  
  ],
  exports:[RouterModule,StringFilterPipe],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
