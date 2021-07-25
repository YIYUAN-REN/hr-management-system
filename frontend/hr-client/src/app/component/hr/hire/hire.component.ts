import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/housing/http.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  pendingWorkFlows:any;
  constructor(private httpService: HttpService) { 
  }

  ngOnInit(): void {
    this.getPending();
  }


  getPending() { 
    this.httpService.getData("http://localhost:8080/viewBoarding/").subscribe(
      (response) => {
        this.pendingWorkFlows = JSON.parse(JSON.stringify(response));
      }
    );
  }
}
