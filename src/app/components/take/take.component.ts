import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, take, takeLast, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit,OnDestroy {

constructor(){}

 arr = ['hello','hey','jii','kya','erfg','ergftr','ghg']
ngOnInit(): void {
  //take : used to get particular data from the observable stream
  //and also take also unsubscribe the stream automatically after getting the desired output
  //take(2) : take starting 2 element
  //takeLast(2) : take last 2 element
  //takeUntil(condition) : take data based on the conditon
  const arrname = from(this.arr)
  arrname.pipe(take(2)).subscribe(res=>{
    console.log(res)
  })
}
ngOnDestroy(): void {
  
}

}
