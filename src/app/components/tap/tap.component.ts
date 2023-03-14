import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit,OnDestroy {
  subs: Subscription | undefined
  arr = ['hello', 'hii', 'jii', 'kya', 'nhi']
  ngOnInit(): void {
    const sub = interval(1000)
    this.subs = sub.pipe(tap(data => {
      if (data == 4) {
        this.subs?.unsubscribe()
      }
    }), map(data => this.arr[data])).subscribe(res => {
      console.log(res);

    })

  }
  ngOnDestroy(){
    this.subs?.unsubscribe()
  }
}
