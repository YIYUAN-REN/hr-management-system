import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// employee - housing 
import { HttpService } from './service/housing/http.service';
import { LoginComponent } from './component/home-page/login/login.component';
import { LoginEmailComponent } from './component/home-page/login/login-email.component';
import { HousingComponent } from './component/employee/housing/housing.component';
import { ReportDetailComponent } from './component/employee/housing/report-detail.component';
import { HrHousingComponent } from './component/hr/housing/hr-housing.component';
import { HrHousingDetailComponent } from './component/hr/housing/hr-housing-detail.component';
// employee - visa
import { OptreceiptService } from './service/visa/optreceipt.service';
import { VisastartComponent } from './component/employee/visa/visastart/visastart.component';
import { UploadComponent } from './component/employee/visa/upload/upload.component';
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


import { EmployeeHomePageComponent } from './component/employee/employee-home-page/employee-home-page.component';
import { HrHomePageComponent } from './component/hr/hr-home-page/hr-home-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
// hr - personal info
import { EmployeeProfileComponent } from './component/hr/employee-profile/employee-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/home-page/register/register.component';

// import { MyAddressFormComponent } from './samples/my-address-form/my-address-form.component';
import { MyDashboardComponent } from './samples/my-dashboard/my-dashboard.component';
import { MyNavComponent } from './samples/my-nav/my-nav.component';
// import { MyTableComponent } from './samples/my-table/my-table.component';
import { HireComponent } from './component/hr/hire/hire.component';
import { HireDetailComponent } from './component/hr/hire/hire-detail/hire-detail.component';

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
    UploadComponent,
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
    MyDashboardComponent,
    MyNavComponent,
    // MyTableComponent
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
    MatMenuModule



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
