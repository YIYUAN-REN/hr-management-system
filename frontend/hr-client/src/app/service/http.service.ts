import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  endpoint: string = "http://localhost:9999/auth/login";
  data: any;

  constructor(private http: HttpClient) { }

  postData(userName: string, email: String, password: string){
    this.data = {
      userName: userName == "" ? null : userName, 
      email: email == "" ? null : email,
      password: password
    }
    return this.http.post(this.endpoint, this.data);
  }
}
