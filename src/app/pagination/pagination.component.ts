import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {StringFilterPipe} from './filter';
import {PaginationService} from './pagination.service';
import {SortGridPipe} from './sorting';
import  {Underscore} from 'underscore';
import * as _ from 'underscore';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers:[PaginationService]
})
export class PaginationComponent implements OnInit {
	@Input('data')

	/*public meals = [{name:'Rish',position:'Associate',office:'Sdm',age:'22',StartDate:'1/02/2017',Salary:'10000'},
	{name:'Kd',position:'Associate',office:'Sdm',age:'25',StartDate:'1/02/2017',Salary:'10000'},
	{name:'Rahul',position:'Associate',office:'Sdm',age:'26',StartDate:'1/02/2017',Salary:'10000'},
	{name:'Luv',position:'Associate',office:'Dextrous',age:'24',StartDate:'1/01/2017',Salary:'8000'},
	{name:'Vasu',position:'Cfo',office:'Fitness24',age:'27',StartDate:'7/07/2017',Salary:'100000'},
	{name:'Ashu',position:'Physiotherapist',office:'Fitness24',age:'26',StartDate:'7/07/2017',Salary:'10000'},
	{name:'Arun',position:'Developer',office:'Fitness24',age:'24',StartDate:'7/06/2017',Salary:'10000'},
	{name:'Shubham',position:'Designer',office:'Fitness24',age:'23',StartDate:'1/02/2017',Salary:'10000'},
	{name:'Vineet',position:'extra',office:'Fitness24',age:'22',StartDate:'1/02/2017',Salary:'10000'}
	{name:'ashu',position:'Associate',office:'Sdm',age:'22',StartDate:'1/02/2017',Salary:'10000'},
	];*/
   public meals = [];
  
   //meal: Record[];
    public filter: string = '';
    public maxSize: number = 5;
    public itemsTotal:number = 0;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public date='';
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
  constructor(private _paginationService:PaginationService) { }

  ngOnInit() {
    this.Record();
  }
  onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }
     Record()
    {
      this._paginationService.getRecords().subscribe(res=>{
        console.log("res",res);
        if(res)
        {
          this.meals = res;
        }
        else{
          console.log("some error occured");
        }
      }, err => {
        console.log("err",err);
      });
    }
    pushItem() {
        let item = this.popped.pop() || 'A newly-created meal!';
        this.meals.push(item);
    }

    popItem() {
        this.popped.push(this.meals.pop());
    }
 /*  sortdata()
   {
     var sorted = _.chain(this.meals)
  .sortBy('name')
  .sortBy('office')
  .value();
  console.log("sorted", sorted);
   }*/
   sortData(){
      var sorted = this.meals;
      sorted.sort();
      sorted.reverse();

   }

}
