import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { LoginEmailComponent } from './component/login-email.component';

const routes: Routes = [
  { path:"login", component:LoginComponent },
  { path:"login-email", component:LoginEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
