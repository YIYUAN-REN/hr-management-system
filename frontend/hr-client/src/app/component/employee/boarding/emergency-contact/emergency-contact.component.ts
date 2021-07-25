import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Emergency } from '../Emergency';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {

  emergencyObjs: any;

  emergencyForms: FormGroup;
  
  get emergencyArray() { return <FormArray>this.emergencyForms.get('emergencyArray'); }

  constructor(private formBuilder: FormBuilder) { 
    this.emergencyForms = this.formBuilder.group(
      {
        emergencyArray: this.formBuilder.array([])
      }
    );
      this.addEmergency();
  }

  ngOnInit(): void {
  }

  addEmergency() {
    this.emergencyArray?.push(this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', , Validators.required],
      // middleName: ['' , Validators.required],
      // phone: ['', Validators.required],
      // email: ['', Validators.required],
      // relation: ['', Validators.required]
      firstName: [''],
      lastName: [''],
      middleName: [''],
      phone: [''],
      email: [''],
      relation: ['']
    }));
  }

  onSubmit(){
    this.emergencyObjs = this.emergencyArray.value;
    console.log(this.emergencyObjs);
  }
}
