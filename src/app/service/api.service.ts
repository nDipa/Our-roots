import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:3000/items";

  getinfor(){

    return this.http.get(`${this.url}`).subscribe((res:any)=>{

      console.log(res);

    });

  }

}

