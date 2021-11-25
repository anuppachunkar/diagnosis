import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-possible-cause',
  templateUrl: './possible-cause.component.html',
  styleUrls: ['./possible-cause.component.css']
})
export class PossibleCauseComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  
  constructor(private commonSrv: CommonService, private router: Router) { }

  requestDataOjb: any;
  displayResponse: any;
  panelOpenState = false;

  ngOnInit(): void {
    this.getResult();
  }

  getResult() {
    this.commonSrv.getPossibleSymptoms(this.requestDataOjb).subscribe( (response) => {
      console.log('response ', response);
      this.displayResponse = response;
     
    })
  }

  bookAppointment() {
    this.router.navigateByUrl('appointment');
  }

}
