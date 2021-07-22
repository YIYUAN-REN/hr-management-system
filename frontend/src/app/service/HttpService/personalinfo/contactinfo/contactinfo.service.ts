import { Contactinfo } from '../../../../pojo/personal-info/contactinfo/contactinfo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactinfoService {

  baseUrl : string = "http://localhost:8080/personalinfo/contactinfo";

  constructor(private http: HttpClient) { }

  getContactinfo() {
    return this.http.get<Contactinfo>(`${this.baseUrl}/1`).pipe(catchError(this.handleError));
  }

  updateContactinfo(contactinfo:Contactinfo){
    return this.http.put(`${this.baseUrl}/updatecontactinfo`, contactinfo)
    .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
