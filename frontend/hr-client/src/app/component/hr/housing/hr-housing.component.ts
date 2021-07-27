import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HrHousingHttpService } from '../../../service/hr/housing/hr-housing-http.service';

@Component({
  selector: 'app-hr-housing',
  templateUrl: './hr-housing.component.html',
  styleUrls: ['./hr-housing.component.css']
})
export class HrHousingComponent implements OnInit {
  addMessage: string;
  deleteMessage: string;
  houses: any;
  contacts: any;
  addHouseForm: any;
  deleteHouseForm: any;

  constructor(private httpService: HrHousingHttpService) { 
    this.addMessage = "";
    this.deleteMessage = "";
    this.addHouseForm = new FormGroup({
      address: new FormControl(""),
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      cellPhone: new FormControl(""),
      email: new FormControl("")
    });
    this.deleteHouseForm = new FormGroup({
      houseId: new FormControl("")
    })
  }

  ngOnInit(): void {
    this.getAllHouse();
  }

  getAllHouse(){
    this.httpService.getData("/hr/housing/getAllHouse").subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        this.houses = jsonObject.houses;
        this.contacts = jsonObject.contacts;
      }
    );
  }

  onSubmit(form: FormGroup){
    this.httpService.postData("/hr/housing/postHouse", {
      address: form.value["address"],
      firstName: form.value["firstName"],
      lastName: form.value["lastName"],
      cellPhone: form.value["cellPhone"],
      email: form.value["email"]
    }).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        this.addMessage = jsonObject.status.message;
      }
    );
  }

  onDelete(form: FormGroup){
    this.httpService.postData("/hr/housing/deleteHouse", {
      houseId: form.value["houseId"]
    }).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        this.deleteMessage = jsonObject.status.message;
      }
    );
  }
}
