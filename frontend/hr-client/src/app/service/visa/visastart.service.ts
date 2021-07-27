import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisastartService {

  private baseUrl = "http://localhost:8080/employee/visa/";


  constructor(private http:HttpClient){}

  

  getData(): Observable<any>{
    
    //for testing
    return this.http.get<any>(this.baseUrl+"124");

    // return this.http.get<any>(this.baseUrl+sessionStorage.getItem("userId"));
  }
}
