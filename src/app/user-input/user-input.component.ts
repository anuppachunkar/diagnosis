import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  symptomsList = [
    {
      "name": "Headache"
    },
    {
      "name": "Stomachache"
    },
    {
      "name": "Fever"
    },
    {
      "name": "Headache"
    }
  ];

  first_name: string = "";
  last_name: string = "";
  age: any;
  gender: string = "";

  count = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getResult() {
    console.log('get result');
    this.router.navigateByUrl('symptoms');
    let userObj = {
      fName: this.first_name,
      lName: this.last_name,
      age: this.age,
      gender: this.gender
    }
    console.log('userObj ', userObj);
    sessionStorage.setItem('userDetails', JSON.stringify(userObj));
  }

}
