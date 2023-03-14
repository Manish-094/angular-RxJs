import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit,AfterViewInit {
@ViewChild('myInput') myInput!: ElementRef
@ViewChild('myInput2') myInput2!: ElementRef
constructor(private loadingbar:LoadingBarService){}
ngOnInit(): void {
  
}
// ngAfterViewInit(): void {
//   const searchItem = fromEvent<any>(this.myInput.nativeElement,'keyup')
//   searchItem.pipe(map(data=>data.target.value),debounceTime(1000)).subscribe((res)=>{
//     console.log(res)
//   })
//   const searchItem2 = fromEvent<any>(this.myInput2.nativeElement,'keyup')
//   searchItem2.pipe(map(data=>data.target.value),debounceTime(1000),distinctUntilChanged()).subscribe((res)=>{
//     console.log(res)
//   })
// }
ngAfterViewInit(){
  const searchItem2 = fromEvent<any>(this.myInput2.nativeElement,'keyup')
    searchItem2.pipe(map(data=>data.target.value),debounceTime(1000),distinctUntilChanged()).subscribe((res)=>{
      console.log(res)
    })
}
}
