import { Component, OnInit,  } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {
  subscription : Subscription | undefined;

ngOnInit(): void {
//   const customObs =  Observable.create((observer: {
//     error(arg0: Error): unknown; next: (arg0: string) => void; 
// }) =>{
//     setTimeout(() => {
//     observer.next("emit data 1")
    
//     }, 1000);
//     setTimeout(() => {
//       observer.next("emit data 2")
//       }, 2000);
//       setTimeout(() => {
//         observer.next("emit data 3")
//     observer.error(new Error("limit exceeded"));

//         }, 3000);
//         setTimeout(() => {
//           observer.next("emit data 4")
//           }, 4000);
//   })
//   customObs.subscribe((res: any)=>{
//     console.log(res);
//   },(err:any)=>{
//     console.log(err);
//   },()=>{
//     console.log("complete");
    
//   })

  //example-2
  const arr = ['ergftfb','rgtbh','rfgtbh','regth']
  const obs2 = Observable.create((observer: {
    complete(): unknown; next: (arg0: string) => void; 
})=>{
    let count = 0;
    setInterval(()=>{
        observer.next(arr[count])
        if(count>=3){
          observer.complete()
        }
        count++;

    },1000)
  })
 this.subscription =  obs2.subscribe((res: any)=>{
    console.log(res);
  })
}
ngOnDestroy(){
  this.subscription?.unsubscribe()
}
}
