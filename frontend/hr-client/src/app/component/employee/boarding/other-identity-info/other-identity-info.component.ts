import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtherIdentity } from '../OtherIdentity';

@Component({
  selector: 'app-other-identity-info',
  templateUrl: './other-identity-info.component.html',
  styleUrls: ['./other-identity-info.component.css']
})
export class OtherIdentityInfoComponent implements OnInit {
  otherIdObj: OtherIdentity = new OtherIdentity('','','');
  idForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.idForm = this.idForm = this.formBuilder.group(
      {
        ssn: ['', Validators.required],
        dob: ['', Validators.required],
        gender: ['I don\'t want to answer'],
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.otherIdObj = <OtherIdentity>this.idForm.value;
  }
}
