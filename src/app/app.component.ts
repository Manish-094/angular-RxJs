import { Component, OnInit } from '@angular/core';
import { FromEventService } from './services/from-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RxJs';
  exclusive:boolean = false;
  constructor(private fromService:FromEventService){}
  ngOnInit(): void {
    this.fromService.exclusive.subscribe(res=>{
      this.exclusive = res
      console.log(this.exclusive,33)
    })
  }
}
