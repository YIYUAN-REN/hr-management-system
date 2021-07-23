import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {
  houseId: number;
  address: string;
  employees: any;
  reportForm: any;
  reports: any;
  message: string;

  ngOnInit(): void {
    this.getHousingDetail();
  }

  constructor(private httpService: HttpService) { 
    this.houseId = 0;
    this.address = "";
    // this.employees = [];
    this.reportForm = new FormGroup({
      title: new FormControl(""),
      description: new FormControl("")
    });
    this.message = "";
  }

  getHousingDetail() {
    // change from userId to employeeId later
    this.httpService.getData("/hr/houseDetail/" + sessionStorage.getItem("userId")).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        // console.log(jsonObject);
        this.houseId = jsonObject.id;
        this.address = jsonObject.address;
        this.employees = jsonObject.employees;
        this.reports = jsonObject.reports;
      }
    );
  }

  onSubmit(form: FormGroup) {
    console.log(this.houseId);
    this.httpService.postData("/hr/facilityReport", {
      houseId: this.houseId,
      title: form.value["title"],
      // change from userId to employeeId later
      employeeId: sessionStorage.getItem("userId"),
      description: form.value["description"]
    }).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        if (jsonObject.status.message != "Success!") {
          this.message = jsonObject.status.message;
        }
      }
    );
  }
}
