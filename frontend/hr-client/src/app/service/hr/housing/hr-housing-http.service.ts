import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrHousingHttpService {

  constructor(private http: HttpClient) { }

  getData(endpoint: string): Observable<Object> {
    return this.http.get(endpoint);
  }

  postData(endpoint: string, data: any) {
    return this.http.post(endpoint, data);
  }
}
