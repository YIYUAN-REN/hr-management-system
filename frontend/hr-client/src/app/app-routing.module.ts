import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login.component';
import { LoginEmailComponent } from './component/auth/login-email.component';

const routes: Routes = [
  { path:"login", component:LoginComponent },
  { path:"login-email", component:LoginEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
