import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {StringFilterPipe} from './filter'
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PaginationComponent implements OnInit {
	@Input('data')

	public meals = [{name:'Rish',position:'Associate',office:'Sdm',age:'22',StartDate:'1/02/2017',Salary:'10000'},
	{name:'Kd',position:'Associate',office:'Sdm',age:'25',StartDate:'1/02/2017',Salary:'10000'},
	{name:'Rahul',position:'Associate',office:'Sdm',age:'26',StartDate:'1/02/2017',Salary:'10000'},
	{name:'Luv',position:'Associate',office:'Dextrous',age:'24',StartDate:'1/01/2017',Salary:'8000'},
	{name:'Vasu',position:'Cfo',office:'Fitness24',age:'27',StartDate:'7/07/2017',Salary:'100000'},
	{name:'Ashu',position:'Physiotherapist',office:'Fitness24',age:'26',StartDate:'7/07/2017',Salary:'10000'},
	{name:'Arun',position:'Developer',office:'Fitness24',age:'24',StartDate:'7/06/2017',Salary:'10000'},
	{name:'Shubham',position:'Designer',office:'Fitness24',age:'23',StartDate:'1/02/2017',Salary:'10000'},
	{name:'Vineet',position:'extra',office:'Fitness24',age:'22',StartDate:'1/02/2017',Salary:'10000'}
	//{name:'ashu',position:'Associate',office:'Sdm',age:'22',StartDate:'1/02/2017',Salary:'10000'},
	];
    public filter: string = '';
    public maxSize: number = 5;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 5,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    private popped = [];
  constructor() { }

  ngOnInit() {
  }
  onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

    pushItem() {
        let item = this.popped.pop() || 'A newly-created meal!';
        this.meals.push(item);
    }

    popItem() {
        this.popped.push(this.meals.pop());
    }

}
