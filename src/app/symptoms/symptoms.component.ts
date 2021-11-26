import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  symptomsList = [
    {
      "name": "Loss Of Taste or Smell"
    }, 
    {
      "name": "Dry Cough "
    },
    {
      "name": "Anxiety"
    },
    {
      "name": "Stomach Ache"
    },
    {
      "name": "Nausea"
    },
    {
      "name": "Vomiting"
    },
    {
      "name": "Fever"
    },
    {
      "name": "Sudden Weight Loss"
    },
    {
      "name": "Sweating"
    },
    {
      "name": "Muscle And Body Pain"
    },
    {
      "name": "Thirsty Than Usual"
    },
    {
      "name": "Headaches"
    },
    {
      "name": "Weakness/Fatigue"
    },
    {
      "name": "Abdominal Pain"
    },
    {
      "name": "Muscle Pain"
    },
    {
      "name": "Diarrhoea/Constipation"
    },
    {
      "name": "Frequent Urination"
    },
    {
      "name": "Hunger"
    },
    {
      "name": "Blurred Vision"
    },
    {
      "name": "Skin Itching"
    },
    {
      "name": "SChest Pain"
    },
    {
      "name": "Shortness in Breath"
    },
    {
      "name": "Dizziness"
    }, 
    {
      "name": "Fast Heartbeat"
    },
    {
      "name": "Indigestion"
    }
    
  ]


  symptoms = [];
  count = 1;
  infoMessage = "";

  lat = 51.678418;
  lng = 7.809007;

  constructor(private commonSrv: CommonService, private router: Router) { }

  ngOnInit(): void {
 
  }

  addMore(form: any) {
    console.log('add more');
    if(this.count <6) {
      this.infoMessage = "";
      this.count = this.count+1;
    } else {
      this.infoMessage = "You can add upto 6 symptoms only!";
      setTimeout(()=>{
        this.infoMessage = "";
      }, 2000)
    }
    

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
    if(form.controls.symptom2 !== undefined && form.controls.symptom2 !== null) {
      symptomDetails[1] = form.controls.symptom2.value;
    }

    if(form.controls.symptom3 !== undefined && form.controls.symptom3 !== null) {
      symptomDetails[2] = form.controls.symptom3.value;
    }

    if(form.controls.symptom4 !== undefined && form.controls.symptom4 !== null) {
      symptomDetails[3] = form.controls.symptom4.value;
    }

    if(form.controls.symptom5 !== undefined && form.controls.symptom5 !== null) {
      symptomDetails[3] = form.controls.symptom5.value;
    }

    if(form.controls.symptom6 !== undefined && form.controls.symptom6 !== null) {
      symptomDetails[3] = form.controls.symptom6.value;
    }
    
    
    

    console.log('symptom details ', symptomDetails);
    sessionStorage.setItem('systomDetails', JSON.stringify(symptomDetails));
    this.router.navigateByUrl('causes');
    // this.commonSrv.getPossibleSymptoms(symptomDetails).subscribe( (response) => {
    //   console.log('response ', response);
    //   this.router.navigateByUrl('causes');
    // })
    
    
  }

}
