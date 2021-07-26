import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hr-home-page',
  templateUrl: './hr-home-page.component.html',
  styleUrls: ['./hr-home-page.component.css']
})
export class HrHomePageComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}


  ngOnInit(): void {
  }
  
  userName = sessionStorage.getItem('userName');
  email = sessionStorage.getItem('email');
}
