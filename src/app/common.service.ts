import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userDetails: any;
  symptoms: any;
  constructor(private http: HttpClient) { 
  }

  
  getPossibleSymptoms(data: any): Observable<any> {
    this.userDetails = sessionStorage.getItem('userDetails');
    let user = JSON.parse(this.userDetails);
    this.symptoms = sessionStorage.getItem('systomDetails');
    let smtp = JSON.parse(this.symptoms);
    console.log("User", user);
    console.log("Symptoms", smtp);
    let reqObj = {
    "name": user.fName,
    "age": user.age,
    "gender": user.gender,
    "symptoms": smtp
  }
  console.log("request object", reqObj);
    const apiURL = `${environment.causesJson}`;
    // return this.http.get(apiURL);
    //return this.http.get(apiURL);
    // once api is ready
     return this.http.post(apiURL, reqObj);
  }
}
