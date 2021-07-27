import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/service/housing/http.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient, private httpService:HttpService) { }

  pushFileToStorage(file: File, type:string): Observable<any> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    //user ID
    let userIdtmp = sessionStorage.getItem("userId");
    if(userIdtmp) formdata.append('userid', userIdtmp);
    else formdata.append('userId', '-1');
    //Driver Liscense/avatar/visa
    formdata.append('type', type);

    // const req = new HttpRequest('POST', 'http://localhost:8080/FileUploadBoarding/', formdata, {
    //   reportProgress: true,
    //   responseType: 'text'
    // });

    // return this.http.request(req);
    return this.httpService.postData("http://localhost:8080/FileUploadBoarding/", formdata);
  }

}
