import { Component, OnInit, ViewChild } from '@angular/core';
import { HireComponent } from '../hire.component';

@Component({
  selector: 'app-hire-detail',
  templateUrl: './hire-detail.component.html',
  styleUrls: ['./hire-detail.component.css']
})
export class HireDetailComponent implements OnInit {

  employee:any;
  contact:any;
  emergency: any;
  visa:any;
  address:any;
  
  constructor() {
    let packString = sessionStorage.getItem("packString");
    var jsonObject;
    if(packString){
      jsonObject = JSON.parse(packString);
    }
    this.employee = jsonObject.employee;
    this.contact = jsonObject.contact;
    this.emergency = jsonObject.emergency;
    this.visa = jsonObject.visa;
    this.address = jsonObject.address;
   }

  ngOnInit(): void {
  }

}
