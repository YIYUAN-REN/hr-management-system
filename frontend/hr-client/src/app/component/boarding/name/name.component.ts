import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Name } from '../Name';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  nameForm: FormGroup;

  nameObj: Name = new Name('', '', '', '');


  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        middleName: [''],
        preferedName: ['']
      }
    );
  }

  
  ngOnInit(): void {
  }

  onSubmit(){
      this.nameObj = <Name>this.nameForm.value;
  }
}
