import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoardingPackage } from './BoardingPackage';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  endPoint: string = "http://localhost:8080/boarding";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addName(pack: BoardingPackage): Observable<BoardingPackage> {
    return this.http.post<BoardingPackage>(this.endPoint, pack, this.httpOptions);
  }
}
