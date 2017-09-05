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
export const routes: Routes =[{
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
}
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    MdMenuModule,
    
    RouterModule.forRoot(routes)
    /*RouterModule.forRoot([
	  	{
		    path: 'register',
		    component: RegisterationComponent
	  	}
	])  */  
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
