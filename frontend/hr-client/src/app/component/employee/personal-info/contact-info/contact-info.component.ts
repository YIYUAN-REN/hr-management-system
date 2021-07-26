import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { forkJoin, Observable } from "rxjs";
import { ContactinfoService } from "../../../../service/personal-info/employee/contactinfo/contactinfo.service";
import { Contactinfo } from "../pojo//contactinfo/contactinfo";

import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { MatDialog } from '@angular/material/dialog';
import { AlertDiscardChangesComponent } from '../alert-discard-changes/alert-discard-changes.component'

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
  providers: [DatePipe]
})
export class ContactinfoComponent implements OnInit {
  contactinfo : Contactinfo = new Contactinfo();
  editorEnabled : boolean = false;

  contactinfoForm : any;

  constructor(private contactinfoService : ContactinfoService, private dateType : DatePipe,
    private dialog: MatDialog) {
    console.log("in contactinfo constructor")
  }

  ngOnInit():void {
    console.log('get contact info ')
        this.contactinfoService.getContactinfo().subscribe(data =>{  
            // console.log('returned user get fname  ' +data.legalName);
            // console.log('returned user get ssn ' +data.ssn);
            // console.log('returned user  ' +data);
            this.contactinfo = data;  
            this.initiateContactinfoValues(data);
            // console.log('at frist name ' +this.);
            this.initiateContactinfoForm();
        });
  }

  // setUserFormValue(){
  //   this.userForm.setValue({
  //     avatar : this.user.avatar,
  //     firstname : this.user.firstName,
  //     ssn : this.user.ssn
  //   });
  // }

  initiateContactinfoValues(data : Contactinfo) {
    data.cellPhone,
    data.workPhone,
    data.personalEmail,
    data.workPhone
  }

  onSubmit() {

    
    let contactinfo = new Contactinfo(
      this.contactinfo.cellPhone,
      this.contactinfo.workPhone,
      this.contactinfo.personalEmail,
      this.contactinfo.workEmail
    );
 
    console.log('contact info for update');

    this.contactinfoService.updateContactinfo(contactinfo).subscribe(responseData => {
      console.log('updated');
      
      console.log('response ');
    }  
    );
    this.editorEnabled = false;
  }

  enableEditor = function(this : any) {
    this.editorEnabled = true;
  };
  
  disableEditor = function(this : any) {
    this.editorEnabled = false;
  };





  initiateContactinfoForm = function(this : any) {
    this.contactinfoForm = new FormGroup({
      cellPhone : new FormControl(this.contactinfo.cellPhone),
      workPhone : new FormControl(this.contactinfo.workPhone),
      personalEmail : new FormControl(this.contactinfo.personalEmail),
      workEmail : new FormControl(this.contactinfo.workEmail)
    });
  }

  discardChanges = function(this : any) {
    let dialogRef = this.dialog.open(AlertDiscardChangesComponent);
    dialogRef.afterClosed().subscribe((result: string) => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
      if (result == 'yes') {
        this.disableEditor();
      } 
    })
  }
}
