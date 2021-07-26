import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../service/housing/http.service'

@Component({
  selector: 'app-hr-email',
  templateUrl: './hr-email.component.html',
  styleUrls: ['./hr-email.component.css']
})
export class HrEmailComponent {

  message: string;
  emailForm: any;

  constructor(private httpService: HttpService, private router: Router) { 
    this.message = "";
    this.emailForm = new FormGroup({
      email: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    this.httpService.postData("/auth/email", {
      email: form.value["email"]
    }).subscribe(
      (data) => {
        var jsonObject = JSON.parse(JSON.stringify(data));
        if (jsonObject.message != "Success!"){
        }
        else{
          this.message = jsonObject.message;
          this.emailForm.setValue({email:''});
        }
      }
    );
  }

}
