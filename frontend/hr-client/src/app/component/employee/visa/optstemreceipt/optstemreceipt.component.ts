import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-optstemreceipt',
  templateUrl: './optstemreceipt.component.html',
  styleUrls: ['./optstemreceipt.component.css']
})
export class OptstemreceiptComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  next(){
    this.router.navigate(['employee/visa/optstemead']);
  }
}
