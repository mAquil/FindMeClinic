import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchDoctorService {

  constructor(private http: HttpClient) {  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'user-key': 'db933142c91d582345976098a6d7b451'
    })
  };
 
  getAllDoctors() {
     return this.http.get('http://localhost:3000/doctors', this.httpOptions);
  }
}


