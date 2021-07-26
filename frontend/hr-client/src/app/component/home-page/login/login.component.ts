import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../service/housing/http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  message: string;
  loginForm: any;
  jsonObject:any;
  constructor(private httpService: HttpService, private router: Router) { 
    this.message = "";
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    this.httpService.postData("/auth/login", {
      userName: form.value["userName"], 
      email: null,
      password: form.value["password"]
    }).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        if (jsonObject.message != "Success!") {
          this.message = jsonObject.message;
          this.loginForm.setValue({userName:"", password:""});
        } else {
          this.jsonObject = jsonObject;
          sessionStorage.setItem("userId", jsonObject.id);
          sessionStorage.setItem("email", jsonObject.email);
          sessionStorage.setItem("userName", jsonObject.userName);
          sessionStorage.setItem("role", jsonObject.role);
          sessionStorage.setItem("token", jsonObject.token);

          this.getBoardingStatus(jsonObject.id);
          
        }
      }
    );
  }

  getBoardingStatus(uid:String){
    this.httpService.getData("http://localhost:8080/getBoardingStatus/" + uid).subscribe(
      (response) => {
        var jsonObj = JSON.parse(JSON.stringify(response));
        var status = jsonObj.message;
        var comment = jsonObj.comment;
        console.log(status);
        if("PENDING"==status){
          this.router.navigate(["pending"]);
        }
        else if("COMPLETE"==status){
        // else{
          if (this.jsonObject.role.roleName == "HR") {
            this.router.navigate(["hr"]);
          } else if (this.jsonObject.role.roleName == "Employee") {
            this.router.navigate(["employee"]);
          } else {
            alert("Role not match!");
          }
        }
        else if("REJECT"==status){
          alert("Rejected, HR Comment: " + comment);
          this.router.navigate(["employee/boarding"]);
        }
      }
    );
  }
}