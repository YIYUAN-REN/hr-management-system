import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login.component';
import { LoginEmailComponent } from './component/auth/login-email.component';
import { HousingComponent } from './component/housing/housing.component';
import { ReportDetailComponent } from './component/housing/report-detail.component';

const routes: Routes = [
  { path:"login", component:LoginComponent },
  { path:"login-email", component:LoginEmailComponent },
  { path:"housing", component:HousingComponent },
  { path:"report-detail/:reportId", component:ReportDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
