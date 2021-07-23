import { Component, OnInit, ViewChild } from '@angular/core';
import { AddressComponent } from '../address/address.component';
import { NameComponent } from '../name/name.component';
import { BoardingPackage } from '../BoardingPackage';
import { HttpServiceService } from '../http-service.service';
import { ContactComponent } from '../contact/contact.component';
import { OtherIdentityInfoComponent } from '../other-identity-info/other-identity-info.component';
import { CarComponent } from '../car/car.component';
import { VisaStatusComponent } from '../visa-status/visa-status.component';
import { ReferenceComponent } from '../reference/reference.component';
import { EmergencyContactComponent } from '../emergency-contact/emergency-contact.component';
@Component({
  selector: 'app-boarding-form',
  templateUrl: './boarding-form.component.html',
  styleUrls: ['./boarding-form.component.css']
})
export class BoardingFormComponent implements OnInit {

  @ViewChild(NameComponent) private nameComponent!: NameComponent;
  @ViewChild(OtherIdentityInfoComponent) private otherIdComponent!: OtherIdentityInfoComponent;
  @ViewChild(AddressComponent) private addressComponent!: AddressComponent;
  @ViewChild(ContactComponent) private contactComponent!: ContactComponent;
  @ViewChild(CarComponent) private carComponent!: CarComponent;
  @ViewChild(VisaStatusComponent) private visaComponent!: VisaStatusComponent;
  @ViewChild(ReferenceComponent) private referComponent!: ReferenceComponent;
  @ViewChild(EmergencyContactComponent) private emergencyComponent!: EmergencyContactComponent;
  formValid: any;
  
  boardingPackage!: BoardingPackage;
  constructor(private httpService: HttpServiceService) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.formValid =  this.nameComponent.nameForm.valid&&this.otherIdComponent.idForm.valid
    &&this.addressComponent.addressForm.valid&&this.contactComponent.contactForm.valid
    &&this.carComponent.carForm.valid&&this.visaComponent.visaForm.valid;
    if(this.formValid){
      this.nameComponent.onSubmit();
      this.otherIdComponent.onSubmit();
      this.addressComponent.onSubmit();
      this.contactComponent.onSubmit();
      this.carComponent.onSubmit();
      this.visaComponent.onSubmit();
      this.referComponent.onSubmit();
      this.emergencyComponent.onSubmit();
      this.boardingPackage = new BoardingPackage(
        this.nameComponent.nameObj, 
        this.otherIdComponent.otherIdObj,
        this.addressComponent.addressObj,
        this.contactComponent.contactObj,
        this.carComponent.carObj,
        this.visaComponent.visaObj,
        this.referComponent.referObj,
        this.emergencyComponent.emergencyObjs
        );

      if (!this.boardingPackage) { return; }
      this.httpService.addName(this.boardingPackage).subscribe(
        (boardingPackage)=>{console.log(boardingPackage)},
        (error)=>{console.log(error)}
      );
    }
    else{
      alert("invalid");
    }
  }
}
