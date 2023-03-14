import { Component, OnDestroy, OnInit } from '@angular/core';
import { FromEventService } from 'src/app/services/from-event.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit,OnDestroy{
 constructor(private fromService:FromEventService){}
  ngOnInit(): void {
    this.fromService.exclusive.next(true)
  }
  ngOnDestroy(): void {
    this.fromService.exclusive.next(false)
  }
}
