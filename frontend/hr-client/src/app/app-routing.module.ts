import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PiShowUserComponent } from './component/pi-show-user/pi-show-user.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonalInfoComponent } from './component/personal-info/personal-info.component';



const routes: Routes = [
  { path: 'employment', component: AppComponent,
    children: [
      {
        path: "personalinfo",
        component: PersonalInfoComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
