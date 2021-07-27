import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../service/housing/http.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  reportId: number;
  report: any;
  comments: any;
  commentForm: any;
  createMessage: string;
  updateMessage: string;

  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute) {
    this.reportId = 0;
    this.commentForm = new FormGroup({
      comment: new FormControl("")
    });
    this.createMessage = "";
    this.updateMessage = "";
  }

  ngOnInit(): void {
    this.getReportId();
    this.getReportAndComments();
  }

  getReportId() {
    this.activateRoute.params.subscribe(
      params => {
        this.reportId = params["reportId"];
      }
    );
  }

  getReportAndComments() {
    this.httpService.getData("/hr/housing/facilityReportDetail/" + this.reportId).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        this.report = jsonObject.facilityReport;
        this.comments = jsonObject.facilityReportDetails;
      }
    );
  }

  onCreate(form: FormGroup){
    this.httpService.postData("/hr/housing/postComment", {
      // change from userId to employeeId later
      employeeId: sessionStorage.getItem("employeeId"),
      reportId: this.reportId,
      comments: form.value["comment"]
    }).subscribe(
      (response) => {
        // doesnt work now because have not set OneToMany mapping --- foreign key exception
        var jsonObject = JSON.parse(JSON.stringify(response));
        console.log(jsonObject);
        this.createMessage = jsonObject.status.message;
      }
    );
  }

  onUpdate(id:number, comments:string) {
    this.httpService.postData("/hr/housing/updateComment", {
      detailId: id,
      comments: comments
    }).subscribe(
      (response) => {
        var jsonObject = JSON.parse(JSON.stringify(response));
        console.log(jsonObject);
        this.updateMessage = jsonObject.status.message;
      }
    )
  }

  onDisabled(author: number):boolean {
    // change from userId to employeeId later
    return sessionStorage.getItem("employeeId") == String(author);
  }

}
