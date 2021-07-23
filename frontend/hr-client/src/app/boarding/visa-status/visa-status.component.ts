import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Visa } from '../Visa';

@Component({
  selector: 'app-visa-status',
  templateUrl: './visa-status.component.html',
  styleUrls: ['./visa-status.component.css']
})
export class VisaStatusComponent implements OnInit {

  visaForm: FormGroup;

  visaObj: Visa = new Visa('','','','','','');

  CitizenOrPR: String = 'yes';

  visaType: String = 'H1-B';
  constructor(private formbuilder: FormBuilder) {
    this.visaForm = this.formbuilder.group(
      {
        citizen: ['yes', Validators.required],
        citizenType: ['Citizen'],
        visaType: ['H1-B'],
        otherVisaType: [''],
        startDate: [''],
        endDate: ['']
      }
    );
   }

  ngOnInit(): void {
  }

  onChangeCitizen(){
    this.CitizenOrPR = this.visaForm.get('citizen')?.value;
    if(this.CitizenOrPR=='yes'){
      this.visaForm.get('visaType')?.setValue('H1-B');
      this.visaType = "H1-B";

      this.visaForm.get('startDate')?.clearValidators();
      this.visaForm.get('startDate')?.setValue('');

      this.visaForm.get('endDate')?.clearValidators();
      this.visaForm.get('endDate')?.setValue('');

      this.visaForm.get('otherVisaType')?.clearValidators();
      this.visaForm.get('otherVisaType')?.setValue('');
    }
    else{
      this.visaForm.get('citizenType')?.setValue('Citizen');
      this.visaForm.get('startDate')?.setValidators(Validators.required);
      this.visaForm.get('endDate')?.setValidators(Validators.required);
    }
  }

  onChangeVisaType(){
    this.visaType = this.visaForm.get('visaType')?.value;
    if(this.visaType=='other'){
      this.visaForm.get('otherVisaType')?.setValidators(Validators.required);
    }
    else{
      this.visaForm.get('otherVisaType')?.clearValidators();
      this.visaForm.get('otherVisaType')?.setValue('');
    }
  }

  onSubmit(){
    this.visaObj = this.visaForm.value;
  }
}
