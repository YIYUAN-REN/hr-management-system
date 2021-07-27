import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-visa-main',
  templateUrl: './hr-visa-main.component.html',
  styleUrls: ['./hr-visa-main.component.css']
})
export class HrVisaMainComponent implements OnInit {

  name!:String;
  visaType!:String;
  startDate!:String;
  endDate!:String;
  daysLeft!:number;
  nextStep!:String;

  filePath!:String;

  toggleValue = false;



  constructor(private router:Router) { }

  ngOnInit(): void {
    this.name = 'Zack';
    this.visaType = 'F1/OPT';
    this.startDate = '3/24/2019';
    this.endDate = '3/25/2020';
    this.daysLeft = 10;
    this.nextStep = 'OPT STEM EAD';
    this.filePath = 'http://fakefilepath.com';

  }
  notify(){
    this.router.navigate(['hr/visa/notify']);
  }


}
