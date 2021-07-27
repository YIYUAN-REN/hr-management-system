import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrVisaMainpageService } from '../../../../service/visa/hrvisa/hr-visa-mainpage.service'

@Component({
  selector: 'app-hr-visa-main',
  templateUrl: './hr-visa-main.component.html',
  styleUrls: ['./hr-visa-main.component.css']
})
export class HrVisaMainComponent implements OnInit {

  employees:any;
  workAuth:any;
  days:any;
  files:any;
  status:any;

  toggleValue = false;

  constructor(private hrvisamainService: HrVisaMainpageService, private router:Router) { }


  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.hrvisamainService.getData().subscribe((data)=>{
      var jsonObject = JSON.parse(JSON.stringify(data));
      this.employees = data.employees;
      this.workAuth = data.workAuth;
      this.days = data.days;
      this.files = data.files;
      this.status = data.status;
      console.log(this.workAuth);
    }
    );
    
  }


  approve(index: string | number){
    let userId = this.employees[index].userId;
    console.log(userId);
    this.hrvisamainService.postData(
      {
        userId: userId,
      }
    ).subscribe(
    );
  }

  notify(){
    this.router.navigate(['hr/visa/notify']);
  }


}
