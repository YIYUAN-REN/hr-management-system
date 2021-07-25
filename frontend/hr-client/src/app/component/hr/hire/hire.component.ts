import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  display: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  getPending(){
    this.httpService.getData("/boardingReview/").subscribe(
      (response)=>{
        var jsonObject = JSON.parse(JSON.stringify(response));
        this.display = jsonObject.firstName;
      }
    );
  }
}
