import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeAddress } from '../EmployeeAddress';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressForm: FormGroup;

  addressObj: EmployeeAddress = new EmployeeAddress('','','','','','');
  constructor(private formBuilder: FormBuilder) { 
    this.addressForm = this.formBuilder.group(
      {
        addressLine1: ['', Validators.required],
        addressLine2: [''],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
        sateName: ['', Validators.required],
        stateAbbr: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addressObj = this.addressForm.value;
    // console.log(this.addressObj);
  }
}
