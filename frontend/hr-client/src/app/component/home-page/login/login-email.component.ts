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
          sessionStorage.setItem("userId", jsonObject.id);
          sessionStorage.setItem("email", jsonObject.email);
          sessionStorage.setItem("userName", jsonObject.userName);
          sessionStorage.setItem("role", jsonObject.role);
          sessionStorage.setItem("token", jsonObject.token);
          this.router.navigate([""]);

          // need HR coding

        }
      }
    );
  }
}
