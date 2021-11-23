import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

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
  ]

  symptomsList2 = [];
  symptomsList3 = [];
  symptomsList4 = [];

  symptoms = [];
  count = 1;

  constructor() { }

  ngOnInit(): void {
 
  }

  addMore(form: any) {
    console.log('add more');
    this.count = this.count+1;
    // this.symptomsList.map(data => {
    //   form.controls.map((mapData: { value: string; }) => {
    //     return mapData.value != data.name;
    //   })
    // })
  }

  getResult(form: any) {
    console.log("get result");
    let symptomDetails = [];
    symptomDetails[0] = form.controls.symptom1.value;

    console.log('symptom details ', symptomDetails);

    
    
  }

}
