import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RegisterationComponent} from './registeration/registeration.component';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
export const routes: Routes =[{
	path:'register',
	component:RegisterationComponent,
	// loadChildren: './home/home.module#HomeModule'
	 
},
{
  path:'login',
  component:LoginComponent,   
}
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
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
