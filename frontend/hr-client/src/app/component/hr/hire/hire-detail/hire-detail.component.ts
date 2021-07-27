import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/housing/http.service';
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
  uid:any;
  comment:String='';

  avatarFile:String;
  driverFile:String;
  visaFile:String;
  constructor(private httpService: HttpService, private router:Router) {
    let packString = sessionStorage.getItem("packString");
    var jsonObject;
    if(packString){
      jsonObject = JSON.parse(packString);
    }
    let uid_tmp = sessionStorage.getItem("userId");
    if(uid_tmp) this.uid = uid_tmp;
    this.employee = jsonObject.employee;
    this.contact = jsonObject.contact;
    this.emergency = jsonObject.emergency;
    this.visa = jsonObject.visa;
    this.address = jsonObject.address;
    this.avatarFile = "avatarBoarding"+"_"+this.uid;
    this.driverFile = "driverBoarding"+"_"+this.uid;
    this.visaFile = "visaBoarding"+"_"+this.uid
   }

  ngOnInit(): void {
  }

  hrDecide(decide:String){
    this.httpService.postData("http://localhost:8080/hrDecide/",{
      decide:decide,
      uid:this.uid,
      comment:this.comment
    }).subscribe(
      (Response)=>{
        console.log(Response);
        this.router.navigate(["hr/hire"]);
      }
    );
  }
}
