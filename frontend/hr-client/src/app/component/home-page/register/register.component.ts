import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../service/housing/http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  message: string;
  registerForm: any;

  constructor(private httpService: HttpService, private router: Router) { 
    this.message = "";
    this.registerForm = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
      token: new FormControl('')
      
    });
  }

  onSubmit(form: FormGroup) {
    this.httpService.postData("/auth/login", {
      userName: form.value["userName"], 
      email : form.value["email"],
      password: form.value["password"],
      passwordConfirm: form.value["passwordConfirm"],
      token: form.value["token"]
    }).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        // console.log("111111111");
        // console.log(jsonObject);
        if (jsonObject.message != "Success!") {
          this.message = jsonObject.message;
          this.registerForm.setValue({userName:"", password:""});
        } else {
          sessionStorage.setItem("userId", jsonObject.id);
          sessionStorage.setItem("email", jsonObject.email);
          sessionStorage.setItem("role", jsonObject.role);
          sessionStorage.setItem("token", jsonObject.token);
          // this.router.navigate(["login"]);  
          this.router.navigate(["employee/boarding"]);
          // need HR coding

        }
      }
    );
  }
}