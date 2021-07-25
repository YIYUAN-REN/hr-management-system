import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-upload-stem-receipt',
  templateUrl: './upload-stem-receipt.component.html',
  styleUrls: ['./upload-stem-receipt.component.css']
})
export class UploadStemReceiptComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  next(){
    this.router.navigate(['hr/visa/optstemreceipt']);
  }
}
