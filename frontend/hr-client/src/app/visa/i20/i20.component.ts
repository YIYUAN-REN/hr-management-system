import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-i20',
  templateUrl: './i20.component.html',
  styleUrls: ['./i20.component.css']
})
export class I20Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  next(){
    this.router.navigate(['hr/visa/uploadStemReceipt']);
  }

}
