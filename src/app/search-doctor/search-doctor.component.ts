import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor.model';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { SearchDoctorService} from '../search-doctor.service';
import { from } from 'rxjs';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  title = 'MyDoctors';
  doctors = [];
  constructor(private doctorservice: SearchDoctorService,
              private share:SharedService,public dialog: MatDialog,
              private router:Router) {
 
  }
  ngOnInit() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '650px',
      height: '300px'
    });

      this.doctorservice.getAllDoctors().subscribe((data:any) => {
        console.log(data);
        //  data = data.restaurants.filter(e => {
        //    return (e.restaurant.photos !== undefined) ? e : null
        // })
        // console.log(data)
        this.doctors = data;
 
      })

      

  // doctors: Doctor[]=[
  //   {
  //     name: 'ashish khurana',
  //     specialization: 'opthalmologist',
  //     clinicName: 'regency clinic',
  //     address: '21/56 preet vihar',
  //     photoPath: 'assets/images/avtar3.png'
  //   },
  //   {
  //   name: 'iqbal khan',
  //     specialization: 'dermatologist',
  //     clinicName: 'apollo hospital',
  //     address: 'D block koramangla',
  //     photoPath: 'assets/images/avtar3.png'
  //   },
  //   {
  //     name: 'priya sen',
  //     specialization: 'dentist',
  //     clinicName: 'new polyclinic',
  //     address: 'civil lines',
  //     photoPath: 'assets/images/avtar2.png'
  //   }
  // ];
  // constructor(public dialog: MatDialog) { }

  // ngOnInit() {
  //   const dialogRef = this.dialog.open(MyDialogComponent, {
  //     width: '650px',
  //     height: '300px'
  //   });
  // }

  // openDialog(): void {
   

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

}


passDetails(details) {
  // console.log("search Doctor Component", details)
          this.share.doctorDetails.next(details)
          this.router.navigateByUrl("/doctorView")
}


}
