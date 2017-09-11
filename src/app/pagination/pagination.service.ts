import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  {SortGridPipe} from './sorting'
import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/toPromise';
@Injectable()
export class PaginationService {

  constructor(private http: Http) { }

  getRecords() {

       /* return this.http.get('./record.json').toPromise().then(res => <Record[]> res.json().data)
        .then(data => { return data; });*/

        return this.http.get('./assets/data/record.json').map((res:Response) =>res.json());

    }
   

}

