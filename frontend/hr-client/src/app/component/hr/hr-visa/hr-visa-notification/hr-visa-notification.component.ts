import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-visa-notification',
  templateUrl: './hr-visa-notification.component.html',
  styleUrls: ['./hr-visa-notification.component.css']
})
export class HrVisaNotificationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['hr/visa']);
  }

}
