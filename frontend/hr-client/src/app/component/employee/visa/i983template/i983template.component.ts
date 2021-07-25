import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-i983template',
  templateUrl: './i983template.component.html',
  styleUrls: ['./i983template.component.css']
})
export class I983templateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  next(){
    this.router.navigate(['employee/visa/waitforhr']);
  }
}
