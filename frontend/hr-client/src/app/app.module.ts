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
// import { AngularFileUploaderModule } from "angular-file-uploader";
import { OptreceiptService } from './services/optreceipt.service';
import { VisastartComponent } from './visa/visastart/visastart.component';
import { UploadComponent } from './visa/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEmailComponent,
    HousingComponent,
    ReportDetailComponent,
    VisastartComponent,
    UploadComponent
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
    OptreceiptService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
