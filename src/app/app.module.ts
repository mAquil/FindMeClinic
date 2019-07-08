import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from "@angular/material";
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { HttpClientModule } from '@angular/common/http'
import { SearchDoctorService } from './search-doctor.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchDoctorComponent,
    ViewDoctorComponent,
    MyDialogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
