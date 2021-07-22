export class Employment {

    workAuthorization : String;
    title: String;
    workAuthStartDate : String;
    workAuthEndDate : String;
    employmentStartDate : String;
    employmentEndDate: String;

    constructor(
        workAuthorization : String,
        title : String,
        workAuthStartDate : String,
        workAuthEndDate : String,
        employmentStartDate : String,
        employmentEndDate: String,
    ){
        this.workAuthEndDate = workAuthEndDate;
        this.title = title;
        this.workAuthorization = workAuthorization;
        this.workAuthStartDate = workAuthStartDate;
        this.employmentStartDate = employmentStartDate;
        this.employmentEndDate = employmentEndDate;
    }
}