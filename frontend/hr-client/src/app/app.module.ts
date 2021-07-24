import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http';
import { OptreceiptService } from './service/visaService/optreceipt.service';
import { VisastartComponent } from './component/visa/visastart/visastart.component';
import { UploadComponent } from './component/visa/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    VisastartComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFileUploaderModule,
    HttpClientModule
  ],
  providers: [
    OptreceiptService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
