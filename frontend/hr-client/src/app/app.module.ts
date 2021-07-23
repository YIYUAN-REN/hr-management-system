import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
