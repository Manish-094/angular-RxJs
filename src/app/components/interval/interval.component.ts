import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { FromEventService } from 'src/app/services/from-event.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  oppMSG = '';
  videoSubscription : Subscription | undefined
  constructor(private _fromeventservice:FromEventService){}
ngOnInit(){
  // const broadCast = timer(3000,1000)   // timer(delay,interval)
  const broadCast = interval(1000)
 this.videoSubscription = broadCast.subscribe((res)=>{
    console.log(res);
    this.oppMSG = 'video'+res
    this._fromeventservice.printList(this.oppMSG);
    if(res>=5){
      this.videoSubscription?.unsubscribe()
    }
  })
}
}
