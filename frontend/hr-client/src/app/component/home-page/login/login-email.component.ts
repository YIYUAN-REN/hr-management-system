import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../service/housing/http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})

export class LoginEmailComponent {
  message: string;
  loginForm: any;
  jsonObject:any;
  constructor(private httpService: HttpService, private router: Router) { 
    this.message = "";
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    this.httpService.postData("/auth/login", {
      userName: null, 
      email: form.value["email"],
      password: form.value["password"]
    }).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        if (jsonObject.message != "Success!") {
          this.message = jsonObject.message;
          this.loginForm.setValue({email:"", password:""});
        } else {
          this.jsonObject = jsonObject;
          sessionStorage.setItem("userId", jsonObject.id);
          sessionStorage.setItem("email", jsonObject.email);
          sessionStorage.setItem("userName", jsonObject.userName);
          sessionStorage.setItem("role", jsonObject.role.roleName);
          sessionStorage.setItem("token", jsonObject.token);
          sessionStorage.setItem("employeeId", jsonObject.employee.id);
          

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
