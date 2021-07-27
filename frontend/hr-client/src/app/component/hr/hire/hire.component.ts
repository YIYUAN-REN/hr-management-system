import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/housing/http.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  pendingWorkFlows:any;
  EmployeeId:any;
  UserId:any;
  constructor(private httpService: HttpService, private router: Router) { 
  }

  ngOnInit(): void {
    this.getPending();
  }

  gotoEmail(){
    this.router.navigate(["hr/email"]);
  }

  getPending() { 
    this.httpService.getData("http://localhost:8080/viewBoarding/").subscribe(
      (response) => {
        this.pendingWorkFlows = JSON.parse(JSON.stringify(response));
      }
    );
  }

  viewApplicationDetail(employeeId:any, uerId:any){
    this.EmployeeId = employeeId;
    this.UserId = uerId;
    this.getApplicationDetail();
  }

  getApplicationDetail() {
    this.httpService.getData("http://localhost:8080/getApplicationDetail/" + this.EmployeeId).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        var jsonString = JSON.stringify(response);
        sessionStorage.setItem("packString",jsonString);
        sessionStorage.setItem("userId", this.UserId);
        this.router.navigate(["hireDetail"]);
      }
    );
  }}
