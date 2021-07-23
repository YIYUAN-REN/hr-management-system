import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OptreceiptService {

  private baseUrl = "http://localhost:8080/hr/visa/optreceipt";

  constructor(private http:HttpClient) { }

  getMessage(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
