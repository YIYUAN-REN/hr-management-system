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
      confirmPassword: new FormControl(''),
      token: new FormControl('')
      
    });
  }

  onSubmit(form: FormGroup) {
    this.httpService.postData("/auth/registration", {
      userName: form.value["userName"], 
      email : form.value["email"],
      password: form.value["password"],
      confirmPassword: form.value["confirmPassword"],
      registrationToken: form.value["token"]
    }).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        this.message = jsonObject.message;
        if (jsonObject.message != "Success!") {
          // this.registerForm.setValue({userName:"", email:"", password:"", confirmPassword:"", token:""});
        } else {
          this.router.navigate(["employee/boarding"]);  
        }
      }
    );
  }
}