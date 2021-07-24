import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './service/http.service';
import { LoginEmailComponent } from './component/auth/login-email.component';
import { HousingComponent } from './component/housing/housing.component';
import { ReportDetailComponent } from './component/housing/report-detail.component';
import { OptreceiptService } from './service/employee-visa-service/optreceipt.service';
import { VisastartComponent } from './component/visa/employee-visa-visastart/visastart.component';
import { UploadComponent } from './component/visa/employee-visa-upload/upload.component';
import { AddressComponent } from './component/boarding/address/address.component';
import { BoardingFormComponent } from './component/boarding/boarding-form/boarding-form.component';
import { CarComponent } from './component/boarding/car/car.component';
import { ContactComponent } from './component/boarding/contact/contact.component';
import { EmergencyContactComponent } from './component/boarding/emergency-contact/emergency-contact.component';
import { HttpServiceService } from './component/boarding/http-service.service';
import { NameComponent } from './component/boarding/name/name.component';
import { OtherIdentityInfoComponent } from './component/boarding/other-identity-info/other-identity-info.component';
import { ReferenceComponent } from './component/boarding/reference/reference.component';
import { VisaStatusComponent } from './component/boarding/visa-status/visa-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEmailComponent,
    HousingComponent,
    ReportDetailComponent,
    VisastartComponent,
    UploadComponent,
    NameComponent,
    BoardingFormComponent,
    AddressComponent,
    ContactComponent,
    OtherIdentityInfoComponent,
    CarComponent,
    VisaStatusComponent,
    ReferenceComponent,
    EmergencyContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFileUploaderModule
  ],
  providers: [
    HttpService,
    HttpServiceService,
    OptreceiptService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
