import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {Subscription} from 'rxjs';
const zoomFadeIn = {opacity: 0, transform: 'translateX({{ x }}) translateY({{ y }}) scale(0)'};
const zoomFadeInFrom = {...zoomFadeIn, transformOrigin: '{{ ox }} {{ oy }}'};
const easeInFor = (duration) => `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`;
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
