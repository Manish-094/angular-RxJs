import { Component, OnInit } from '@angular/core';
import { from, map, pluck, Subscription, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
ngOnInit(): void {
  //EX-01
  // const users = [
  //   {name:'manish',skills:'html'},
  //   {name:'refgb',skills:'C++'},
  //   {name:'mrtgr',skills:'C'},
  //   {name:'ghb',skills:'js'},
  //   {name:'hnbv',skills:'java'},
  //   {name:'hbgt',skills:'css'},
  // ]

  // const obs1 = from(users)
  // obs1.pipe(pluck('name'),toArray())    // pluck is used to get particular property of object
  // .subscribe(res=>{
  //   console.log(res);
  //   res.forEach((val)=>{
  //     console.log(val);
  //   })
  // })

 

  //EX-02  pluck nested
  const users1 = [
    {name:'manish',skills:'html',
    job:{
      title:'FrontEnd Developer',
       Exp:'10 years'
    }
  },
    {name:'refgb',skills:'C++', 
    job:{
      title:'BackEnd Developer',
       Exp:'5 years'
    }},
    {name:'mrtgr',skills:'C', 
    job:{
      title:'FullStack Developer',
       Exp:'2 years'
    }},
    {name:'ghb',skills:'js', 
    job:{
      title:'React Developer',
       Exp:'3 years'
    }},
    {name:'hnbv',skills:'java', 
    job:{
      title:'Angular Developer',
       Exp:'11 years'
    }},

  ]

  const obs2 = from(users1)
  obs2.pipe(pluck('job','title'),toArray()).subscribe(res=>{
    console.log(res)
  })


}


}
