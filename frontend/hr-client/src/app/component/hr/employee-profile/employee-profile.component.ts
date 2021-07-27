import { Component, OnInit } from '@angular/core';
import { EmployeeSearchService} from "../../../service/personal-info/hr/employee-search.service";
import { EmployeeResponse } from "./EmployeeResponse";
import { NameService } from "../../../service/personal-info/employee/name/name.service";
import { Name } from "../../employee/personal-info/pojo/name/name";
import { EmploymentService } from "../../../service/personal-info/employee/employment/employment.service";
import { Employment } from "../../employee/personal-info/pojo/employment/employment";
import { EmergencycontactService } from "../../../service/personal-info/employee/emergencycontact/emergencycontact.service";
import { EmergencyContact } from '../../employee/personal-info/pojo/EmergencyContact/EmergencyContact';
import { ContactinfoService } from "../../../service/personal-info/employee/contactinfo/contactinfo.service";
import { Contactinfo } from "../../employee/personal-info/pojo//contactinfo/contactinfo";
import { AddressService } from "../../..//service/personal-info/employee/address/address.service";
import { AddressInfo } from '../../employee/personal-info/pojo/addressInfo/address-info';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  userId  :any;
  employeeId : any;

  searchValue : string;
  constructor(private employeeSearchService : EmployeeSearchService, private nameService : NameService,
    private employmentService : EmploymentService, private emergencyContactService : EmergencycontactService,
    private contactinfoService : ContactinfoService,private addressService : AddressService) { 
    this.searchValue = "",
    this.userId = 1;
    this.employeeId=1
  }

  ngOnInit(): void {
  }
  selected = true;
  

  selectedValue:any;
  userInput:any;

  name : Name = new Name();
  employment : Employment = new Employment();
  emergencyContacts : EmergencyContact[] = [];
  contactinfo : Contactinfo = new Contactinfo();
  addressInfo : AddressInfo = new AddressInfo();


  searchEmployee() {
    if (this.searchValue == 'ID') {
      this.employeeId = this.userInput;
      this.userId = 1;
      console.log("choose ID")
      console.log(this.userInput)
    } 

    this.nameService.getName(this.userId).subscribe(data =>{  
      console.log('returned user get fname  ' +data.legalName);
      console.log('returned user get ssn ' +data.ssn);
      console.log('returned user  ' +data);
      this.name = data;  
      this.initiateNameValues(data);
      console.log('at frist name ' +this.name.gender);
    });

    this.employmentService.getEmployment(this.employeeId, this.userId).subscribe(data =>{  
      // console.log('returned user get fname  ' +data.legalName);
      // console.log('returned user get ssn ' +data.ssn);
      // console.log('returned user  ' +data);
      this.employment = data;  
      this.initiateEmploymentValues(data);
      console.log("after initialization, employment  "+ this.employment.workAuthEndDate);
    });

    this.emergencyContactService.getEmergencyContacts(this.employeeId).subscribe(data =>{  
        // console.log('returned user get fname  ' +data.legalName);
        // console.log('returned user get ssn ' +data.ssn);
        // console.log('returned user  ' +data);
        this.emergencyContacts = data;  
        console.log(this.emergencyContacts)
    });
    
    this.contactinfoService.getContactinfo(this.employeeId).subscribe(data =>{  
      // console.log('returned user get fname  ' +data.legalName);
      // console.log('returned user get ssn ' +data.ssn);
      // console.log('returned user  ' +data);
      this.contactinfo = data;  
      this.initiateContactinfoValues(data);
      // console.log('at frist name ' +this.);
    });

    this.addressService.getAddressInfo(this.employeeId).subscribe(data =>{  
      // console.log('returned user get fname  ' +data.legalName);
      // console.log('returned user get ssn ' +data.ssn);
      // console.log('returned user  ' +data);
      this.addressInfo = data;  
  });

  }

  initiateNameValues(data : Name) {
    data.age,
    data.avatar,
    data.ssn,
    data.preferedName,
    data.legalName,
    data.gender
  }

  initiateEmploymentValues(data : Employment) {
    this.employment.workAuthorization = data.workAuthorization;
    this.employment.title = data.title;
    this.employment.employmentStartDate = data.employmentStartDate;
    this.employment.employmentEndDate = data.employmentEndDate;
    this.employment.workAuthStartDate = data.workAuthStartDate;
    this.employment.workAuthEndDate = data.workAuthEndDate;
  }
  initiateContactinfoValues(data : Contactinfo) {
    data.cellPhone,
    data.workPhone,
    data.personalEmail,
    data.workPhone
  }
}
