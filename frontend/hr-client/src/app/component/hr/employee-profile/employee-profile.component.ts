import { Component, OnInit } from '@angular/core';
import { EmployeeSearchService} from "../../../service/personal-info/hr/employee-search.service";
import { EmployeeResponse } from "./EmployeeResponse";

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  userInput : string;
  constructor(private employeeSearchService : EmployeeSearchService) { 
    this.userInput = ""
  }

  ngOnInit(): void {
  }
  selected = true;
  selectedValue = "Name";



  search(searchBy : string = this.selectedValue, searchValue : string = this.userInput) {
      this.employeeSearchService.searchEmployee(searchBy, searchValue).subscribe(data =>{  
        // console.log('returned user get fname  ' +data.legalName);
        // console.log('returned user get ssn ' +data.ssn);
        // console.log('returned user  ' +data);
        // this.name = data;  
        // this.initiateNameValues(data);
        // console.log('at frist name ' +this.name.gender);
        // this.initiateNameForm();
    });
  };


  searchEmployee = function(searchBy : string, searchValue : string) {

  }
}
