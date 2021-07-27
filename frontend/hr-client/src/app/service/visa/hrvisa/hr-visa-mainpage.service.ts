import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HrVisaMainpageService {

  private baseUrl = "http://localhost:8080/hr/visa/";
  private approveUrl = "http://localhost:8080/hr/approve";
  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    
    //for testing
    // return this.http.get<any>(this.baseUrl+"124");

    return this.http.get<any>(this.baseUrl);
  }

  postData( data: any) {
    return this.http.post(this.approveUrl, data);
  }
}
