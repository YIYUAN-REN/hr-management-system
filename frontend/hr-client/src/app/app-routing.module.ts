import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// employee - housing 
import { LoginComponent } from './component/home-page/login/login.component';
import { LoginEmailComponent } from './component/home-page/login/login-email.component';
import { HousingComponent } from '../app/component/employee/housing/housing.component';
import { ReportDetailComponent } from '../app/component/employee/housing/report-detail.component';
import { HrHousingComponent } from './component/hr/housing/hr-housing.component';
import { HrHousingDetailComponent } from './component/hr/housing/hr-housing-detail.component';
import { HrEmailComponent } from './component/hr/email/hr-email.component';
import { JwtGuardService } from './service/guard/jwt-guard.service';
import { EmployeeGuardService } from './service/guard/employee-guard.service';
import { HrGuardService } from './service/guard/hr-guard.service';

// employee - visa
import { I20Component } from '../app/component/employee/visa/i20/i20.component';
import { I983templateComponent } from '../app/component/employee/visa/i983template/i983template.component';
import { OpteadComponent } from '../app/component/employee//visa/optead/optead.component';
import { OptreceiptComponent } from '../app/component/employee/visa/optreceipt/optreceipt.component';
import { OptstemeadComponent } from '../app/component/employee/visa/optstemead/optstemead.component';
import { OptstemreceiptComponent } from '../app/component/employee/visa/optstemreceipt/optstemreceipt.component';
import { UploadStemReceiptComponent } from '../app/component/employee/visa/upload-stem-receipt/upload-stem-receipt.component';
import { WaitforhrComponent } from '../app/component/employee/visa/waitforhr/waitforhr.component';
import { VisastartComponent } from '../app/component/employee/visa/visastart/visastart.component';

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
import { EmployeeHomePageComponent } from './component/employee/employee-home-page/employee-home-page.component';
import { HrHomePageComponent } from './component/hr/hr-home-page/hr-home-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HrVisaMainComponent } from './component/hr/hr-visa/hr-visa-main/hr-visa-main.component';
import { HrVisaNotificationComponent } from './component/hr/hr-visa/hr-visa-notification/hr-visa-notification.component';
// hr - personal info
import { EmployeeProfileComponent } from './component/hr/employee-profile/employee-profile.component';
import { RegisterComponent } from './component/home-page/register/register.component';
import { HireComponent } from './component/hr/hire/hire.component';
import { HireDetailComponent } from './component/hr/hire/hire-detail/hire-detail.component';
import { PendingComponent } from './component/home-page/pending/pending.component';
import { FileUploadComponent } from './component/employee/boarding/file-upload/file-upload.component';

const routes: Routes = [
  // home page
  { path:"", component:HomePageComponent},

  // { path:"address", component:MyAddressFormComponent},
  // { path:"table", component:MyTableComponent},
  { path:"pending", component: PendingComponent, canActivate:[JwtGuardService]},
  { path:"login", component: HomePageComponent },
  
  { path:"employee", component:EmployeeHomePageComponent,
    children : [  
      { path:"housing", component:HousingComponent, canActivate:[JwtGuardService, EmployeeGuardService] },
      { path:'visa', component: VisastartComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
      { path:"personalInfo", component:PersonalInfoComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
      { path:"boarding", component:BoardingFormComponent, canActivate:[JwtGuardService]}
    ]
  },
  { path:"employee/register", component:RegisterComponent },
  { path:"hr", component:HrHomePageComponent ,
    children : [
      { path:"EmployeeProfile", component:EmployeeProfileComponent },
      { path:"hire", component:HireComponent },
      { path:'housing', component: HrHousingComponent},
      { path:"visa", component:HrVisaMainComponent}
    ], canActivate:[JwtGuardService, HrGuardService]
  },
  { path:"hireDetail", component:HireDetailComponent, canActivate:[JwtGuardService, HrGuardService] },
  
  // employee - housing 
  { path:"employee/login", component:LoginComponent },
  { path:"employee/login-email", component:LoginEmailComponent },
  { path:"employee/housing", component:HousingComponent, canActivate:[JwtGuardService, EmployeeGuardService] },
  { path:"employee/housing/report-detail/:reportId", component:ReportDetailComponent, canActivate:[JwtGuardService, EmployeeGuardService] },
  { path:"hr/houseManagement", component:HrHousingComponent, canActivate:[JwtGuardService, HrGuardService] },
  { path:"hr/houseManagement/detail/:houseId", component:HrHousingDetailComponent, canActivate:[JwtGuardService, HrGuardService] },
  { path:"hr/email", component:HrEmailComponent, canActivate:[JwtGuardService, HrGuardService] },

  // employee - visa
  {path:'employee/visa', component: VisastartComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
  {path:'employee/visa/optreceipt', component:OptreceiptComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
  {path:'employee/visa/optead', component:OpteadComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
  {path:'employee/visa/i983template', component:I983templateComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
  {path:'employee/visa/waitforhr', component:WaitforhrComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
  {path:'employee/visa/i20' ,component:I20Component, canActivate:[JwtGuardService, EmployeeGuardService]},
  {path:'employee/visa/uploadStemReceipt',component:UploadStemReceiptComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
  {path:'employee/visa/optstemreceipt',component:OptstemreceiptComponent, canActivate:[JwtGuardService, EmployeeGuardService]},
  {path:'employee/visa/optstemead',component:OptstemeadComponent, canActivate:[JwtGuardService, EmployeeGuardService]},

  // hr - visa
  {path:'hr/visa/notify',component: HrVisaNotificationComponent, canActivate:[JwtGuardService, HrGuardService]},

  // employee - boarding
  { path:"employee/boarding", component:BoardingFormComponent,
    children:[
      {path:'address',component:AddressComponent},
      {path:'car',component:CarComponent},
      {path:'contact',component:ContactComponent},
      {path:'emergencyContact',component:EmergencyContactComponent},
      {path:'name',component:NameComponent},
      {path:'otherId',component:OtherIdentityInfoComponent},
      {path:'reference',component:ReferenceComponent},
      {path:'visa',component:VisaStatusComponent}
    ]
  },
  { path:"boardingUpload", component:FileUploadComponent, canActivate:[JwtGuardService]},

  // employee - personal info
  { path:"employee/personalInfo", component:PersonalInfoComponent,
    children:[
    {path:'name',component:PiNameComponent}
  ], canActivate:[JwtGuardService, EmployeeGuardService]
  },
  // hr - personal info
  {path:'hr/EmployeeProfile',component:EmployeeProfileComponent, canActivate:[JwtGuardService, HrGuardService]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
