import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { forkJoin, Observable } from "rxjs";
import { EmploymentService } from "../../../service/HttpService/personalinfo/employment/employment.service";
import { Employment } from "../../../pojo/personal-info/employment/employment";
import { enableRipple } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { MatDialog } from '@angular/material';
import { AlertDiscardChangesComponent } from '../alert-discard-changes/alert-discard-changes.component'

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
  providers: [DatePipe]
})
export class EmploymentComponent implements OnInit {
  private employment : Employment;
  private editorEnabled : false;

  employmentForm : any;

  constructor(private employmentService : EmploymentService, private dateType : DatePipe,
    private dialog: MatDialog) {
    console.log("in employment constructor")
  }

  ngOnInit():void {
    console.log('get employment ');
        this.employmentService.getEmployment().subscribe(data =>{  
            // console.log('returned user get fname  ' +data.legalName);
            // console.log('returned user get ssn ' +data.ssn);
            // console.log('returned user  ' +data);
            this.employment = data;  
            this.initiateEmploymentValues(data);
            console.log("after initialization, employment  "+ this.employment.workAuthEndDate);
            // console.log('at frist name ' +this.name.gender);
            this.initiateEmploymentForm();
        });
  }

  // setUserFormValue(){
  //   this.userForm.setValue({
  //     avatar : this.user.avatar,
  //     firstname : this.user.firstName,
  //     ssn : this.user.ssn
  //   });
  // }

  initiateEmploymentValues(data : Employment) {
    this.employment.workAuthorization = data.workAuthorization;
    this.employment.title = data.title;
    this.employment.employmentStartDate = data.employmentStartDate;
    this.employment.employmentEndDate = data.employmentEndDate;
    this.employment.workAuthStartDate = data.workAuthStartDate;
    this.employment.workAuthEndDate = data.workAuthEndDate;
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    
    let employment = new Employment(
      this.employment.workAuthorization,
      this.employment.title,
      this.employment.workAuthStartDate,
      this.employment.workAuthEndDate,
      this.employment.employmentStartDate,
      this.employment.employmentEndDate
    );
 
    console.log('name for update');

    this.employmentService.updateEmployment(employment).subscribe(responseData => {
      console.log('updated');
      
      console.log('response ');
    }  
    );
    this.editorEnabled = false;
  }

  enableEditor = function() {
    this.editorEnabled = true;
  };
  
  disableEditor = function() {
    this.editorEnabled = false;
  };





  initiateEmploymentForm = function() {
    this.employmentForm = new FormGroup({
      workAuthorization : new FormControl(this.employment.workAuthorization),
      title : new FormControl(this.employment.title),
      workAuthEndDate : new FormControl(this.employment.workAuthEndDate),
      workAuthStartDate : new FormControl(this.employment.workAuthStartDate),
      employmentStartDate : new FormControl(this.employment.employmentStartDate),
      employmentEndDate : new FormControl(this.employment.employmentEndDate)

    });
  }

  discardChanges = function() {
    let dialogRef = this.dialog.open(AlertDiscardChangesComponent);
    dialogRef.afterClosed().subscribe(result => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
      if (result == 'yes') {
        this.disableEditor();
      } 
    })
  }
}
