
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmployeeResponse } from "../../../component/hr/employee-profile/EmployeeResponse";
import { Employee } from 'src/app/component/employee/boarding/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSearchService {

  baseUrl : string = "http://localhost:8080/hr/employeeProfile/searchEmployment";

  constructor(private http: HttpClient) { }

  searchEmployee(searchBy : string, searchValue : string) {
    return this.http.get(`${this.baseUrl}/{searchBy}/{searchValue}`)
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
