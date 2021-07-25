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
        // console.log("111111111");
        // console.log(jsonObject);
        if (jsonObject.message != "Success!") {
          this.message = jsonObject.message;
          this.loginForm.setValue({userName:"", password:""});
        } else {
          sessionStorage.setItem("userId", jsonObject.id);
          sessionStorage.setItem("email", jsonObject.email);
          sessionStorage.setItem("role", jsonObject.role);
          sessionStorage.setItem("token", jsonObject.token);
          this.router.navigate([""]);

          // need HR coding

        }
      }
    );
  }
}