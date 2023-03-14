import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  subscription:Subscription | undefined
   arr = [
    {id:1,name:"manish"},
    {id:2,name:"manish"},
    {id:3,name:"manish"},
    {id:4,name:"manish"},
    {id:5,name:"manish"},
    {id:6,name:"manish"},

  ]
ngOnInit(): void {
  //example 1
  //toArray:convert stream of data into array
  //take:take 5 stream of data
  const source = interval(1000)
 this.subscription =  source.pipe(take(5),toArray()).
 subscribe(res=>{
    console.log(res); 
  })

  //example 2
//converting array into stream
  const obs6 = from(this.arr);
  obs6.pipe().subscribe(res=>{
    console.log(res);
  })

  //converting stream of data into array
  const obs = from(obs6)
  obs.pipe(toArray()).subscribe(res=>{
    console.log(res);
  })

  //example 3
  const source2 = of('rfg','rfgb','rfgvb')
  source2.pipe(toArray()).subscribe(res=>{
    console.log(res);
    
  })
}
}
