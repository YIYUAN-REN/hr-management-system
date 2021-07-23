import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http';
import { OptreceiptService } from './services/optreceipt.service';
import { VisastartComponent } from './visa/visastart/visastart.component';
import { UploadComponent } from './visa/upload/upload.component';

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
