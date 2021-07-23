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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEmailComponent,
    HousingComponent,
    ReportDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
