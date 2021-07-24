import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiShowUserComponent } from './component/pi-show-user/pi-show-user.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { NameComponent } from './component/personal-info/name/name.component';
import { AddressComponent } from './component/personal-info/address/address.component';
import { ContactinfoComponent } from './component/personal-info/contact-info/contact-info.component';
import { EmploymentComponent } from './component/personal-info/employment/employment.component';
import { EmergencyContactComponent } from './component/personal-info/emergency-contact/emergency-contact.component';
import { DocumentComponent } from './component/personal-info/document/document.component';
import { TestComponent } from './component/personal-info/test/test.component';
import { AlertDiscardChangesComponent } from './component/personal-info/alert-discard-changes/alert-discard-changes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PiShowUserComponent,
    PersonalInfoComponent,
    NameComponent,
    AddressComponent,
    ContactinfoComponent,
    EmploymentComponent,
    EmergencyContactComponent,
    DocumentComponent,
    TestComponent,
    AlertDiscardChangesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertDiscardChangesComponent
  ]
})
export class AppModule { }
