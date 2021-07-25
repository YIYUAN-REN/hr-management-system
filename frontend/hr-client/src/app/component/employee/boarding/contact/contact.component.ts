import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactForm: FormGroup;

  contactObj: Contact = new Contact('', '', '');


  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group(
      {
        email: ['', Validators.required],
        cellPhone: ['', Validators.required],
        alterPhone: [''],
      }
    );
  }

  
  ngOnInit(): void {
  }

  onSubmit(){
      this.contactObj = <Contact>this.contactForm.value;
  }

}
