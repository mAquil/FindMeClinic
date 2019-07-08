import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  doctorDetails = new Subject();
  doctorDetail$ = this.doctorDetails.asObservable();

  send(data){
    this.doctorDetails.next(data);
  }  
}
