import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

// employee - housing 
import { HttpService } from './service/housing/http.service';
import { LoginComponent } from './component/home-page/login/login.component';
import { LoginEmailComponent } from './component/home-page/login/login-email.component';
import { HousingComponent } from './component/employee/housing/housing.component';
import { ReportDetailComponent } from './component/employee/housing/report-detail.component';
import { HrHousingComponent } from './component/hr/housing/hr-housing.component';
import { HrHousingDetailComponent } from './component/hr/housing/hr-housing-detail.component';
import { JwtGuardService } from './service/guard/jwt-guard.service';
import { EmployeeGuardService } from './service/guard/employee-guard.service';
import { HrGuardService } from './service/guard/hr-guard.service';

// employee - visa
import { VisastartComponent } from './component/employee/visa/visastart/visastart.component';
import { I983templateComponent } from './component/employee/visa/i983template/i983template.component';
import { I20Component } from './component/employee/visa/i20/i20.component';
import { UploadStemReceiptComponent } from './component/employee/visa/upload-stem-receipt/upload-stem-receipt.component';


// hr - visa
import { HrVisaMainComponent } from './component/hr/hr-visa/hr-visa-main/hr-visa-main.component';
import { HrVisaNotificationComponent } from './component/hr/hr-visa/hr-visa-notification/hr-visa-notification.component';
// employee - boarding
import { AddressComponent } from './component/employee/boarding/address/address.component';
import { BoardingFormComponent } from './component/employee/boarding/boarding-form/boarding-form.component';
import { CarComponent } from './component/employee/boarding/car/car.component';
import { ContactComponent } from './component/employee/boarding/contact/contact.component';
import { EmergencyContactComponent } from './component/employee/boarding/emergency-contact/emergency-contact.component';
import { HttpServiceService } from './component/employee/boarding/http-service.service';
import { NameComponent } from './component/employee/boarding/name/name.component';
import { OtherIdentityInfoComponent } from './component/employee/boarding/other-identity-info/other-identity-info.component';
import { ReferenceComponent } from './component/employee/boarding/reference/reference.component';
import { VisaStatusComponent } from './component/employee/boarding/visa-status/visa-status.component';

// employee - personal info
import { PersonalInfoComponent } from './component/employee/personal-info/personal-info.component';
import { PiNameComponent } from './component/employee/personal-info/name/name.component';
import { PiAddressComponent } from './component/employee/personal-info/address/address.component';
import { ContactinfoComponent } from './component/employee/personal-info/contact-info/contact-info.component';
import { EmploymentComponent } from './component/employee/personal-info/employment/employment.component';
import { PiEmergencyContactComponent } from './component/employee/personal-info/emergency-contact/emergency-contact.component';
import { DocumentComponent } from './component/employee/personal-info/document/document.component';
import { AlertDiscardChangesComponent } from './component/employee/personal-info/alert-discard-changes/alert-discard-changes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';


import { EmployeeHomePageComponent } from './component/employee/employee-home-page/employee-home-page.component';
import { HrHomePageComponent } from './component/hr/hr-home-page/hr-home-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
// hr - personal info
import { EmployeeProfileComponent } from './component/hr/employee-profile/employee-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/home-page/register/register.component';

// import { MyAddressFormComponent } from './samples/my-address-form/my-address-form.component';
import { OptreceiptComponent } from './component/employee/visa/optreceipt/optreceipt.component';
import { DetailsUploadComponent } from './component/employee/visa/details-upload/details-upload.component';
import { OptstemreceiptComponent } from './component/employee/visa/optstemreceipt/optstemreceipt.component';

// import { MyTableComponent } from './samples/my-table/my-table.component';
import { EmployeeBoardingHomeComponent } from './component/employee/boarding/employee-boarding-home/employee-boarding-home.component';
import { EmployeeHousingHomeComponent } from './component/employee/housing/employee-housing-home/employee-housing-home.component';
import { EmployeeVisaHomeComponent } from './component/employee/visa/employee-visa-home/employee-visa-home.component';

import { HireComponent } from './component/hr/hire/hire.component';
import { HireDetailComponent } from './component/hr/hire/hire-detail/hire-detail.component';
import { HrEmailComponent } from './component/hr/email/hr-email.component';
import { PendingComponent } from './component/home-page/pending/pending.component';
import { FileUploadComponent } from './component/employee/boarding/file-upload/file-upload.component';
import { FileUploadService } from './component/employee/boarding/file-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    // employee - housing 
    LoginComponent,
    LoginEmailComponent,
    HousingComponent,
    ReportDetailComponent,
    HrHousingComponent,
    HrHousingDetailComponent,

    // employee - visa
    VisastartComponent,
    OptreceiptComponent,
    I983templateComponent,
    I20Component,
    UploadStemReceiptComponent,
    OptstemreceiptComponent,

    //hr -visa
    HrVisaMainComponent,
    HrVisaNotificationComponent,

    // employee - boarding
    NameComponent,
    BoardingFormComponent,
    AddressComponent,
    ContactComponent,
    OtherIdentityInfoComponent,
    CarComponent,
    VisaStatusComponent,
    ReferenceComponent,
    EmergencyContactComponent,

    // employee - personal info
    PersonalInfoComponent,
    PiNameComponent,
    PiAddressComponent,
    ContactinfoComponent,
    EmploymentComponent,
    PiEmergencyContactComponent,
    DocumentComponent,
    AlertDiscardChangesComponent,
    EmployeeHomePageComponent,
    HrHomePageComponent,
    HomePageComponent,
    EmployeeProfileComponent,
    RegisterComponent,

    // MyAddressFormComponent,
    DetailsUploadComponent,
    // MyTableComponent
    HireComponent,
    HireDetailComponent,
    HrEmailComponent,
    PendingComponent,
    FileUploadComponent,
    EmployeeBoardingHomeComponent,
    EmployeeHousingHomeComponent,
    EmployeeVisaHomeComponent,

    HireComponent,
    HireDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatMenuModule,
    CommonModule,
    MatExpansionModule
  ],
  providers: [
    HttpService,
    HttpServiceService,
    // OptreceiptService,
    JwtGuardService,
    EmployeeGuardService,
    HrGuardService,
    FileUploadService,
    CookieService
  ],
  exports:[CommonModule,],

  bootstrap: [AppComponent]
})
export class AppModule { }
