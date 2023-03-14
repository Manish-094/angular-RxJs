import { Component, OnInit } from '@angular/core';
import { filter, from, map, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(){}
  result:any
   dataArr = [
    {id:1,name:'manish',gender:'Male'},
    {id:2,name:'jai',gender:'Male'},
    {id:3,name:'aleena',gender:'female'},
    {id:4,name:'aarti',gender:'female'},
    {id:5,name:'ali',gender:'Male'},
    {id:6,name:'pushpa',gender:'female'},
    {id:7,name:'manish',gender:'Male'},
    {id:8,name:'viru',gender:'Male'},
  ]

ngOnInit(): void {

  //filter example EX-01  filter by length
//  const source = from(this.dataArr)
//  source.pipe(filter(data=>data.name.length<5),toArray()).subscribe(res=>{
//   console.log(res);
//   this.result = res;
//   console.log(this.result)
//  })

   //filter example EX-02  filter by gender
  //  const source = from(this.dataArr)
  //  source.pipe(filter(data=>data.gender=='female'),toArray()).subscribe(res=>{
  //   console.log(res);
  //   this.result = res;
  //   console.log(this.result)
  //  })

   //filter example EX-03  filter by id
   const source = from(this.dataArr)
   source.pipe(filter(data=>data.id<=5),toArray()).subscribe(res=>{
    console.log(res);
    this.result = res;
    console.log(this.result)
   })
   
}
}
