import { Injectable } from '@angular/core';
import { map, Observable, Subject, take, toArray } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FromEventService {
  exclusive = new Subject<boolean>();
  constructor(private _http:HttpClient){}


  printList(val:any){
    let el =  document.createElement('li')
    el.innerText = val;
    document.getElementById('elcont')?.appendChild(el);
  }

  getDetails():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(data=>{
      return data;
    }))
  }


}
