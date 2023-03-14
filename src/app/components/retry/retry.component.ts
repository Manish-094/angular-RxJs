import { Component, OnInit } from '@angular/core';
import { from, retry } from 'rxjs';
import { FromEventService } from 'src/app/services/from-event.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit{
  person:any;
  fectching:boolean = false
  status= 'No Data'
  constructor(private fromservice:FromEventService){}
  ngOnInit(): void {
     
  }
  Onsubmit(){
    this.fectching = true;
    this.status = "Fetching Date..."
    this.fromservice.getDetails().pipe(retry(4)).subscribe
    (res=>{
      console.log(res)
      this.person = res
      this.status = 'data fetched' 
      this.fectching = false
    },(err)=>{
      this.fectching = false;
      this.status = 'problem fetching data'
      console.log(err);
    })
  }
}
