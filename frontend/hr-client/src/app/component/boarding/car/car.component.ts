import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carForm: FormGroup;

  carObj: Car = new Car('','no','','');

  ownLiscense:String='no';

  constructor(private formBuilder: FormBuilder) {
    this.carForm = this.formBuilder.group(
      {
        carInfo: ['', Validators.pattern],
        haveLiscense: ['no', Validators.required],
        driverLiscense: [''],
        expirationDate: ['']
      }
    );
   }

  ngOnInit(): void {
  }

  onSelect(){
    this.ownLiscense = this.carForm.get('haveLiscense')?.value;
    if(this.ownLiscense=='yes'){
      this.carForm.get('driverLiscense')?.setValidators(Validators.required);
      this.carForm.get('expirationDate')?.setValidators(Validators.required);
    }
    else{
      this.carForm.get('driverLiscense')?.clearValidators();
      this.carForm.get('driverLiscense')?.setValue('');

      this.carForm.get('expirationDate')?.clearValidators();
      this.carForm.get('expirationDate')?.setValue('');
    }
  }

  onSubmit(){
    this.carObj = this.carForm.value;
  }
}
