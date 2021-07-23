import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { forkJoin, Observable } from "rxjs";
import { EmployeeService } from "../../../service/employee.service";
import { Employee } from "../../../model/employee.model";
import { enableRipple } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [DatePipe]
})
export class TestComponent implements OnInit {
  private user : Employee;
  private editorEnabled : false;

  userForm : any;

  constructor(private employeeService : EmployeeService, private dateType : DatePipe) {
    console.log("in pishowuser constructor")
  }

  ngOnInit():void {
    console.log('get user ')
        // this.employeeService.getUser().subscribe(data =>{  
        //     console.log('returned user get fname  ' +data.firstName);
        //     console.log('returned user get ssn ' +data.ssn);
        //     console.log('returned user  ' +data);
        //     this.user = data;  
        //     this.initiateUserValues(data);
        //     console.log('at frist user ' +this.user.firstName);
        //     this.initiateUserForm();
        // });
  }

  setUserFormValue(){
    this.userForm.setValue({
      avatar : this.user.avatar,
      firstname : this.user.firstName,
      ssn : this.user.ssn
    });
  }

  initiateUserValues(data : Employee) {
    data.avatar,
    data.firstName,
    data.ssn
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    
    let user = new Employee(
      this.user.avatar,
      this.user.firstName,
      this.user.ssn
    );
    console.log('user ' + this.user.firstName);
    console.log('user for update');

    this.employeeService.updateUser(user).subscribe(responseData => {
      console.log('updated');
      
      console.log('response ');
    }
      
    );
  }

  enableEditor = function() {
    this.editorEnabled = true;
  };
  
  disableEditor = function() {
    this.editorEnabled = false;
  };

  save = function() {
    this.disableEditor();
    this.dialog.show();
  };

  cancle = function() {
    this.dialog.show();
  };

  btnClick = function () {
    this.dialog.hide();
  }

  initiateUserForm = function() {
    this.userForm = new FormGroup({
      avatar : new FormControl(this.user.avatar),
      firstname : new FormControl(this.user.firstname),
      ssn : new FormControl(this.user.ssn)
    });
  }
}
