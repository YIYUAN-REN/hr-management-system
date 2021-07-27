import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http:HttpClient) { }

  pushFileToStorage(file: File, type:string): Observable<Object> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    //user ID
    let userIdtmp = sessionStorage.getItem("userId");
    if(userIdtmp) formdata.append('userid', userIdtmp);
    else formdata.append('userId', '-1');
    //Driver Liscense/avatar/visa
    formdata.append('type', type);

    // const req = new HttpRequest('POST', 'http://localhost:8080/boardingFile/upload', formdata, {
    //   reportProgress: true,
    //   responseType: 'text'
    // });

    return this.http.post('http://localhost:8080/boardingFile/upload', formdata);
  }

}
