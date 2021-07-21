import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  endPoint: string = "http://localhost:9999";
  data: any;

  constructor(private http: HttpClient) { }

  postData(endpoint: string, userName: string, email: String, password: string){
    this.data = {
      userName: userName == "" ? null : userName, 
      email: email == "" ? null : email,
      password: password
    }
    return this.http.post(endpoint, this.data);
  }
}
