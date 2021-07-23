import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login.component';
import { LoginEmailComponent } from './component/auth/login-email.component';
import { HousingComponent } from './component/housing/housing.component';
import { ReportDetailComponent } from './component/housing/report-detail.component';
import { I20Component } from './visa/i20/i20.component';
import { I983templateComponent } from './visa/i983template/i983template.component';
import { OpteadComponent } from './visa/optead/optead.component';
import { OptreceiptComponent } from './visa/optreceipt/optreceipt.component';
import { OptstemeadComponent } from './visa/optstemead/optstemead.component';
import { OptstemreceiptComponent } from './visa/optstemreceipt/optstemreceipt.component';
import { UploadStemReceiptComponent } from './visa/upload-stem-receipt/upload-stem-receipt.component';
import { WaitforhrComponent } from './visa/waitforhr/waitforhr.component';
import { VisastartComponent } from './visa/visastart/visastart.component';
import { UploadComponent } from './visa/upload/upload.component';

const routes: Routes = [
  { path:"login", component:LoginComponent },
  { path:"login-email", component:LoginEmailComponent },
  { path:"housing", component:HousingComponent },
  { path:"report-detail/:reportId", component:ReportDetailComponent },
  {path:'hr/visa/main', component: VisastartComponent},
  {path:'hr/visa/optreceipt', component:OptreceiptComponent,
    children:[
      {path:'upload',component:UploadComponent}
    ]
  },
  {path:'hr/visa/optead', component:OpteadComponent},
  {path:'hr/visa/i983template', component:I983templateComponent},
  {path:'hr/visa/waitforhr', component:WaitforhrComponent},
  {path:'hr/visa/i20' ,component:I20Component},
  {path:'hr/visa/uploadStemReceipt',component:UploadStemReceiptComponent},
  {path:'hr/visa/optstemreceipt',component:OptstemreceiptComponent},
  {path:'hr/visa/optstemead',component:OptstemeadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
