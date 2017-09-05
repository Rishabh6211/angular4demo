import { Component, OnInit, Input } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
 animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class RegisterationComponent implements OnInit {
 //@Input() Component: Component;
 public user = {
      username:'',
      email:'',
      password:'',
      confirmPassword:''

 }
state: string = 'small';

  constructor() { }

  ngOnInit() {

  }
  

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
