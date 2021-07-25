import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selected = true;
  selectedValue = "Name";

  search = function(this : any) {

    // if () {
    //   this.selected = true;
    // } else {

    // }
    
  };
}
