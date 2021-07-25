import { Component, OnInit } from '@angular/core';
import { VisastartService } from '../../../../service/visa/visastart.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-visastart',
  templateUrl: './visastart.component.html',
  styleUrls: ['./visastart.component.css']
})
export class VisastartComponent implements OnInit {

  visaType!: String;
  I983Submitted! :boolean;
  OptStemReceiptReceived! :boolean;
  msg!:string;

  constructor(private visastartService: VisastartService,
              private router:Router) { }

  check(){
    this.visastartService.getData().subscribe((data)=>{
      this.visaType = data.visaType;
      this.I983Submitted = data.I983Submitted;
      this.OptStemReceiptReceived = data.OptStemReceiptReceived;
      this.msg = "Your current OPT status is:" + data.visaType;
    });
    
    return this.msg;
       
  }

  //redirect
  go(){
    if(this.visaType=="OPT Receipt"){
      this.router.navigate(['employee/visa/optreceipt']);
    }else if(this.visaType=="OPT EAD"){
      this.router.navigate(['employee/visa/optead']);
    }else if(this.visaType=="I-983" && !this.I983Submitted){
      this.router.navigate(['employee/visa/i983template']);
    }else if(this.visaType=="I-983" && this.I983Submitted){
      this.router.navigate(['employee/visa/waitforhr']);
    }else if(this.visaType=="I-20" && !this.OptStemReceiptReceived){
      this.router.navigate(['employee/visa/i20']);
    }else if(this.visaType=="I-20" && this.OptStemReceiptReceived){
      this.router.navigate(['employee/visa/uploadStemReceipt']);
    }else if(this.visaType=="OPT STEM Receipt"){
      this.router.navigate(['employee/visa/optstemreceipt']);
    }else if(this.visaType=="OPT STEM EAD"){
      this.router.navigate(['employee/visa/optstemead']);
    }
  }

  ngOnInit(): void {
  }

}
