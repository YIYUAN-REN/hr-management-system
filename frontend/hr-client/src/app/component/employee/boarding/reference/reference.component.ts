import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reference } from '../Reference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  referForm: FormGroup;
  referObj: Reference = new Reference('','','','','','','');

  constructor(private formBuilder: FormBuilder) {
    this.referForm = this.formBuilder.group(
      {
        firstName: [''],
        lastName: [''],
        middleName: [''],
        phone: [''],
        address: [''],
        email: [''],
        relation: ['']
      }
    );
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.referObj = this.referForm.value;
  }
}
