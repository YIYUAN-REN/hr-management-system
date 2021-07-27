import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.css']
})
export class EmployeeHomePageComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  currentPage : string;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private cookieService: CookieService) {
    this.currentPage = "";
  }

  ngOnInit(): void {
  }

  userName = sessionStorage.getItem('userName');
  email = sessionStorage.getItem('email');
  role = sessionStorage.getItem('role');


  currentPages = [
    "Personal Information",
    "Boarding",
    "Housing",
    "Visa"
  ]
  changeCurrentPage(page : string) {
    this.currentPage = page;
    console.log("current page : " + this.currentPage);
  }

  logOut() {
    // clear session info here
    this.cookieService.delete("JWT");
    sessionStorage.clear();
    
    //redirect to login page
    this.router.navigate(["login"]);
  }
  
}
