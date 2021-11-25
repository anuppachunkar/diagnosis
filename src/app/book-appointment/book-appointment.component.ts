import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  email: any;
  mobile: any;
  pincode: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirm() {
    this.router.navigateByUrl('map');
  }

}
