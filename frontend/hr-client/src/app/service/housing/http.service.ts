import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // headers: HttpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   Authorization: 'Basic'
  // });
  // headers: HttpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   Authorization: 'Basic ' + btoa(sessionStorage.getItem("email") + ':' + sessionStorage.getItem("password"))
  // });

  constructor(private http: HttpClient) { }

  getData(endpoint: string): Observable<Object> {
    return this.http.get(endpoint
      // , 
      // {
      //   headers: this.headers
        
      //   // {
      //   //   // origin: "*"
      //   //   // 'Access-Control-Request-Headers': 'http://localhost:8080'
      //   //   "Allow-Cross-Origin-Origin": "*"
      //   //   ,
      //   //   // "Content-Type": "application/json"
      //   //   // ,
      //   //   // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
      //   // },
      //   // responseType: "json"
      //   // // ,
      //   // // withCredentials: true
      // }
    );
  }

  postData(endpoint: string, data: any) {
    return this.http.post(endpoint, data);
  }
}
