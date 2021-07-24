import { Component, OnInit } from '@angular/core';
import { VisastartService } from '../../../service/visaService/visastart.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-visastart',
  templateUrl: './visastart.component.html',
  styleUrls: ['./visastart.component.css']
})
export class VisastartComponent implements OnInit {

  visaType!: String;
  status!: String;
  msg!:string;

  constructor(private visastartService: VisastartService,
              private router:Router) { }

  check(){
    this.visastartService.getData().subscribe((data)=>{
      this.visaType = data.visaType;
      this.status = data.status;
      this.msg = "Your current OPT status is:" + data.visaType;
    });
    
    return this.msg;
       
  }

  //redirect
  go(){
    if(this.visaType=="OPT Receipt"){
      this.router.navigate(['hr/visa/optreceipt']);
    }else if(this.visaType=="OPT EAD"){
      this.router.navigate(['hr/visa/optead']);
    }else if(this.visaType=="I-983" && this.status=="nosubmission"){
      this.router.navigate(['hr/visa/i983template']);
    }else if(this.visaType=="I-983" && this.status=="waitforhr"){
      this.router.navigate(['hr/visa/waitforhr']);
    }else if(this.visaType=="I-20" && this.status=="nonewi20"){
      this.router.navigate(['hr/visa/i20']);
    }else if(this.visaType=="I-20" && this.status=="newi20"){
      this.router.navigate(['hr/visa/uploadStemReceipt']);
    }else if(this.visaType=="OPT STEM Receipt"){
      this.router.navigate(['hr/visa/optstemreceipt']);
    }else if(this.visaType=="OPT STEM EAD"){
      this.router.navigate(['hr/visa/optstemead']);
    }
  }

  ngOnInit(): void {
  }

}
