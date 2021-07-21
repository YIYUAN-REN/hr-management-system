import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
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
    this.httpService.postData(form.value["userName"], "", form.value["password"]).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        if (jsonObject.message != "Success!") {
          this.message = jsonObject.message;
          this.loginForm.setValue({userName:"", password:""});
        } else {
          sessionStorage.setItem("id", jsonObject.id);
          sessionStorage.setItem("email", jsonObject.email);
          sessionStorage.setItem("role", jsonObject.role);
          sessionStorage.setItem("token", jsonObject.token);
          this.router.navigate(["housing"]);

          // need HR coding

        }
      }
    );
  }
}