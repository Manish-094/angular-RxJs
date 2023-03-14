import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { FromEventService } from 'src/app/services/from-event.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit{
  @ViewChild('addbtn') addbtn!:ElementRef;
constructor(private _fromEventservice:FromEventService){}
ngAfterViewInit(): void {
  let count = 1;
  fromEvent(this.addbtn.nativeElement,'click').subscribe((res)=>{
    console.log(res);
    let countVal = 'video'+count++;
    this._fromEventservice.printList(countVal)
  })
}
}
