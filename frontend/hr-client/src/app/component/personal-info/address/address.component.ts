import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { forkJoin, Observable } from "rxjs";
import { AddressService } from "../../../service/HttpService/personalinfo/address/address.service";
import { AddressInfo } from '../../../pojo/personal-info/addressInfo/address-info';
import { Address } from '../../../pojo/personal-info/address/address';
import { enableRipple } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { MatDialog } from '@angular/material/dialog';
import { AlertDiscardChangesComponent } from '../alert-discard-changes/alert-discard-changes.component'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [DatePipe]
})
export class AddressComponent implements OnInit {
  addressInfo : AddressInfo;
  editorEnabled : false;

  addressForm : any;

  constructor(private addressService : AddressService, private dateType : DatePipe,
    private dialog: MatDialog) {
    console.log("in contactinfo constructor")
  }

  ngOnInit():void {
    console.log('get address info ')
        this.addressService.getAddressInfo().subscribe(data =>{  
            // console.log('returned user get fname  ' +data.legalName);
            // console.log('returned user get ssn ' +data.ssn);
            // console.log('returned user  ' +data);
            this.addressInfo = data;  
            this.initiateAddressValues(data);
            // console.log('at frist name ' +this.);
            this.initiateAddressForm();
        });
  }

  // setUserFormValue(){
  //   this.userForm.setValue({
  //     avatar : this.user.avatar,
  //     firstname : this.user.firstName,
  //     ssn : this.user.ssn
  //   });
  // }

  initiateAddressValues(data : AddressInfo) {

    // data.cellPhone,
    // data.workPhone,
    // data.personalEmail,
    // data.workPhone
  }

  onSubmit(form: any) {
    console.log(form);
    
    let address = new AddressInfo(
      this.addressInfo.primaryAddress,
      this.addressInfo.secondaryAddress
    );
 
    console.log('contact info for update');

    this.addressService.updateAddressInfo(address).subscribe(responseData => {
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





  initiateAddressForm = function() {
    this.addressForm = new FormGroup({
      primaryAddressLineOne : new FormControl(this.addressInfo.primaryAddress.lineOne),
      primaryAddressLineTwo : new FormControl(this.addressInfo.primaryAddress.lineTwo),
      primaryAddressCity : new FormControl(this.addressInfo.primaryAddress.city),
      primaryAddressState : new FormControl(this.addressInfo.primaryAddress.state),
      primaryAddressZip : new FormControl(this.addressInfo.primaryAddress.zip),

      secondaryAddressLineOne : new FormControl(this.addressInfo.primaryAddress.lineOne),
      secondaryAddressLineTwo : new FormControl(this.addressInfo.primaryAddress.lineTwo),
      secondaryAddressCity : new FormControl(this.addressInfo.primaryAddress.city),
      secondaryAddressState : new FormControl(this.addressInfo.primaryAddress.state),
      secondaryAddressZip : new FormControl(this.addressInfo.primaryAddress.zip),
    });
  }
  discardChanges = function() {
    let dialogRef = this.dialog.open(AlertDiscardChangesComponent);
    console.log("open alert");
    dialogRef.afterClosed().subscribe(result => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
      if (result == 'yes') {
        this.disableEditor();
      } 
    })
  }


}
