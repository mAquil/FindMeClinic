import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';

const routes: Routes = [
  { path: 'doctorView',
  component: ViewDoctorComponent  },
  { path: '',
    component: SearchDoctorComponent  },
  { path: "**", component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =[ViewDoctorComponent]