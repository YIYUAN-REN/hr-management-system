import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<any> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    // console.log(sessionStorage.getItem("userId"));

    const req = new HttpRequest('POST', 'http://localhost:8080/employee/visa/optEADUpload/'+sessionStorage.getItem("userId"), formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/employee/visa/optEADUpload/all/'+sessionStorage.getItem("userId"));
  }
}
