import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { forkJoin, Observable } from "rxjs";
import { EmergencycontactService } from "../../../service/HttpService/personalinfo/emergencycontact/emergencycontact.service";
import { EmergencyContact } from '../../../pojo/personal-info/EmergencyContact/EmergencyContact';
import { Address } from '../../../pojo/personal-info/address/address';
import { enableRipple } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { MatDialog } from '@angular/material/dialog';
import { AlertDiscardChangesComponent } from '../alert-discard-changes/alert-discard-changes.component'

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css'],
  providers: [DatePipe]
})
export class EmergencyContactComponent implements OnInit {
  emergencyContacts : EmergencyContact[];
  editorEnabled : false;

  emergencyContctForm : FormArray;

  constructor(private emergencyContactService : EmergencycontactService, private dateType : DatePipe,
    private dialog: MatDialog) {
    console.log("in contactinfo constructor")
  }

  ngOnInit():void {
    console.log('get emergencyContacts ')
        this.emergencyContactService.getEmergencyContacts().subscribe(data =>{  
            // console.log('returned user get fname  ' +data.legalName);
            // console.log('returned user get ssn ' +data.ssn);
            // console.log('returned user  ' +data);
            this.emergencyContacts = data;  
            console.log(this.emergencyContacts)
            this.initiateAddressValues(data);
            // console.log('at frist name ' +this.);
            this.initiateEmergencyContactForm();
        });
  }

  // setUserFormValue(){
  //   this.userForm.setValue({
  //     avatar : this.user.avatar,
  //     firstname : this.user.firstName,
  //     ssn : this.user.ssn
  //   });
  // }

  initiateAddressValues(data : EmergencyContact[]) {

    // data.cellPhone,
    // data.workPhone,
    // data.personalEmail,
    // data.workPhone
  }

  onSubmit(form: any) {
    console.log(form);
    
    let contacts = this.emergencyContacts;
 
    console.log('emergency contact for update');

    this.emergencyContactService.updateEmergencyContact(contacts).subscribe(responseData => {
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





  initiateEmergencyContactForm = function() {
    this.emergencyContctForm = new FormGroup({
        Name : new FormControl(),
        Phone : new FormControl(),
        address : new FormGroup({
          line1 : new FormControl(),
          line2 : new FormControl(),
          City : new FormControl(),
          State : new FormControl(),
          Zipcode : new FormControl()
        })
    });
  }

  discardChanges = function()  {
    let dialogRef = this.dialog.open(AlertDiscardChangesComponent);
    dialogRef.afterClosed().subscribe(result => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
      if (result == 'yes') {
        this.disableEditor();
      } 
    })
  }
}
