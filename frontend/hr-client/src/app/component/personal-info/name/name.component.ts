import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { forkJoin, Observable } from "rxjs";
import { NameService } from "../../../service/HttpService/personalinfo/name/name.service";
import { Name } from "../../../pojo/personal-info/name/name";
import { enableRipple } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { MatDialog } from '@angular/material/dialog';
import { AlertDiscardChangesComponent } from '../alert-discard-changes/alert-discard-changes.component'


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  providers: [DatePipe]
})
export class NameComponent implements OnInit {
  name : Name;
  editorEnabled : false;

  nameForm : any;

  constructor(private nameService : NameService, 
              private dateType : DatePipe,
              private dialog: MatDialog) {
    console.log("in name constructor")
  }

  ngOnInit():void {
    console.log('get user ')
        this.nameService.getName().subscribe(data =>{  
            console.log('returned user get fname  ' +data.legalName);
            console.log('returned user get ssn ' +data.ssn);
            console.log('returned user  ' +data);
            this.name = data;  
            this.initiateNameValues(data);
            console.log('at frist name ' +this.name.gender);
            this.initiateNameForm();
        });
  }

  // setUserFormValue(){
  //   this.userForm.setValue({
  //     avatar : this.user.avatar,
  //     firstname : this.user.firstName,
  //     ssn : this.user.ssn
  //   });
  // }

  initiateNameValues(data : Name) {
    data.age,
    data.avatar,
    data.ssn,
    data.preferedName,
    data.legalName,
    data.gender
  }

  onSubmit(form: any) {
    console.log(form);
    
    let name = new Name(
      this.name.age,
      this.name.avatar,
      this.name.ssn,
      this.name.preferedName,
      this.name.legalName,
      this.name.gender
    );
 
    console.log('name for update');

    this.nameService.updateName(name).subscribe(responseData => {
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





  initiateNameForm = function() {
    this.nameForm = new FormGroup({
      age : new FormControl(this.name.age),
      avatar : new FormControl(this.name.avatar),
      ssn : new FormControl(this.name.ssn),
      preferedName : new FormControl(this.name.preferedName),
      legalName : new FormControl(this.name.legalName),
      gender : new FormControl(this.name.gender)
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
