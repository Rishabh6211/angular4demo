import { Component, OnInit, ViewChild } from '@angular/core';
import {MdMenuModule, MdMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  constructor() { }

  ngOnInit() {
  }

}
