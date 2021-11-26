import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirmAppt(data: string) {
    if(data === 'milind') {
      window.open('https://www.practo.com/pune/doctor/dr-dr-milind-kulkarni-general-physician-1?practice_id=809820&specialization=General%20Physician&referrer=doctor_listing', '_blank');
    } else if (data === 'jyoti') {
      window.open('https://www.practo.com/pune/doctor/dr-jyoti-gulati-cardiologist-1?practice_id=706102&specialization=General%20Physician&referrer=doctor_listing', '_blank');
    } else if(data === 'vinod') {
      window.open('https://www.practo.com/pune/doctor/dr-dr-vinod-midha-family-physician?practice_id=1359210&specialization=General%20Physician&referrer=doctor_listing', '_blank');
    }
    
  }

}
