import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  subscription:Subscription | undefined
  sub1:Subscription|undefined
ngOnInit(){

  //EX-01
 const broadcastvideo = interval(1000)
// this.subscription =  broadcastvideo.pipe(map(data=>'Video'+data)
// )
// .subscribe((res)=>{
//   console.log(res);
//  })
//  setTimeout(()=>{
//   this.subscription?.unsubscribe()
//  },10000)


//EX-02
// this.sub1 = broadcastvideo.pipe(map(data=>data*2))
// .subscribe((res)=>{
//   console.log(res);
// })
// setTimeout(() => {
//   this.sub1?.unsubscribe()
// }, 10000);

//EX-03

const member = [
  {id:1,name:'manish'},
  {id:2,name:'rfvg'},
  {id:3,name:'erfd'},
  {id:4,name:'ytrgef'},
  {id:5,name:'jmhn'},
  {id:6,name:'tge'},
  {id:7,name:'gterf'},
]

let memObs = from(member)
memObs.pipe(map(data=>data.name
))
.subscribe(res=>{
  console.log(res);
  
})

}





}
