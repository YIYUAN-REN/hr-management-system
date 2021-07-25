import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// employee - housing 
import { LoginComponent } from './component/employee/auth/login.component';
import { LoginEmailComponent } from './component/employee/auth/login-email.component';
import { HousingComponent } from '../app/component/employee/housing/housing.component';
import { ReportDetailComponent } from '../app/component/employee/housing/report-detail.component';
import { HrHousingComponent } from './component/hr/housing/hr-housing.component';

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
import { UploadComponent } from '../app/component/employee/visa/upload/upload.component';

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
import { HireComponent } from './component/hr/hire/hire.component';

const routes: Routes = [
  // home page
  { path:"", component:HomePageComponent},
  { path:"employee", component:EmployeeHomePageComponent,
    children : [
      { path:"login", component:LoginComponent },
      { path:"housing", component:HousingComponent },
      { path:'visa', component: VisastartComponent},
      { path:"personalInfo", component:PersonalInfoComponent},
      { path:"boarding", component:BoardingFormComponent}
    ]
  },
  { path:"hr", component:HrHomePageComponent ,
    children : [
      { path:"EmployeeProfile", component:LoginComponent },
      { path:"hire", component:HireComponent },
      { path:'housing', component: VisastartComponent},
      { path:"visa", component:PersonalInfoComponent}
  ]},


  // employee - housing 
  { path:"employee/login", component:LoginComponent },
  { path:"employee/login-email", component:LoginEmailComponent },
  { path:"employee/housing", component:HousingComponent },
  { path:"employee/housing/report-detail/:reportId", component:ReportDetailComponent },

  // employee - visa
  {path:'employee/visa', component: VisastartComponent},
  {path:'employee/visa/optreceipt', component:OptreceiptComponent,
    children:[
      {path:'upload',component:UploadComponent}
    ]
  },
  {path:'employee/visa/optead', component:OpteadComponent},
  {path:'employee/visa/i983template', component:I983templateComponent},
  {path:'employee/visa/waitforhr', component:WaitforhrComponent},
  {path:'employee/visa/i20' ,component:I20Component},
  {path:'employee/visa/uploadStemReceipt',component:UploadStemReceiptComponent},
  {path:'employee/visa/optstemreceipt',component:OptstemreceiptComponent},
  {path:'employee/visa/optstemead',component:OptstemeadComponent},


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

    // employee - personal info
    { path:"employee/personalInfo", component:PersonalInfoComponent,
    children:[
      {path:'name',component:PiNameComponent}
    ]
  }
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
