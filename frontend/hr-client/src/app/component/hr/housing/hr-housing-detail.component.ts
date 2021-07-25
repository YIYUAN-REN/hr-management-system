import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrHousingHttpService } from '../../../service/hr/housing/hr-housing-http.service';

@Component({
  selector: 'app-hr-housing-detail',
  templateUrl: './hr-housing-detail.component.html',
  styleUrls: ['./hr-housing-detail.component.css']
})
export class HrHousingDetailComponent implements OnInit {

  houseId: number;
  house: any;
  employees: any;
  facilities: any;
  reports: any;
  contact: any;

  constructor(private activateRoute: ActivatedRoute, private httpService: HrHousingHttpService, private router: Router) {
    this.houseId = 0;
   }

  ngOnInit(): void {
    this.getHouseId();
    this.getHouseDetail();
  }

  getHouseId() {
    this.activateRoute.params.subscribe(
      params => {
        this.houseId = params["houseId"];
      }
    );
  }

  getHouseDetail() {
    this.httpService.getData("/hr/housing/getHouseDetailById/" + this.houseId).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        this.house = jsonObject.house;
        this.employees = jsonObject.employees;
        this.facilities = jsonObject.facilities;
        this.reports = jsonObject.reports;
        this.contact = jsonObject.contact;
      }
    );
  }

  // need to go to employee profile
  goProfile(employeeId: number) {
    sessionStorage.setItem("currentEmployeeId", String(employeeId));
    // this.router.navigate(["personalInformation"]);
  }

}
