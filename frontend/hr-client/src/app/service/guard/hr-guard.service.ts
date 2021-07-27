import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HrGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate():boolean{
    if (sessionStorage.getItem("role") != "HR") {
      this.router.navigate(["login"]);
      return false;
    } else {
      return true;
    }
  }
}
