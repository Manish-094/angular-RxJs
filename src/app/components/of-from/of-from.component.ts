import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { FromEventService } from 'src/app/services/from-event.service';


@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  constructor(private _fromeventservice:FromEventService){}
  message:any;
  ngOnInit(): void {
    //of
    const Obs1 = of('Anup','Shekhar','Sharma')
    const Obs2 = of({a:"hello",b:"hey",c:"opps"})
    Obs1.subscribe(res=>{
      console.log(res);
      this._fromeventservice.printList(res);
    })

    Obs2.subscribe(res=>{
      console.log(res,44);
      this.message = res;
    })

    //form - array
    const obs3 = from(['fvdg','rfgbf','rfgerf']);
    obs3.subscribe(res=>{
      console.log(res,44);
      
    })

    //from : promise to observable stream
    const promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve("promise resolved")
      }, 2000);
    })
    const obs4 = from(promise);
    obs4.subscribe(res=>{
      console.log(res,77);
      
    })

    //from: string to observable stream
    const obs5 = from("welcome")
    obs5.subscribe(res=>{
      console.log(res,88);
    })
  }
}
