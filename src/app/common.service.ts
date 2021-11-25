import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  
  getPossibleSymptoms(data: any): Observable<any> {
    const apiURL = `${environment.causesJson}`;
    // return this.http.get(apiURL);
    return this.http.get(apiURL);
    // once api is ready
    // return this.http.post(apiURL, data);
  }
}
