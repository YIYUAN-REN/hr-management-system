export class Employment {

    workAuthorization : String;
    title: String;
    workAuthStartDate : String;
    workAuthEndDate : String;
    employmentStartDate : String;
    employmentEndDate: String;

    constructor(
        workAuthorization : String = "EAD",
        title : String = "title",
        workAuthStartDate : String = "ead start date",
        workAuthEndDate : String = "ead end date",
        employmentStartDate : String = "employment start date",
        employmentEndDate: String = "employment end date",
    ){
        this.workAuthEndDate = workAuthEndDate;
        this.title = title;
        this.workAuthorization = workAuthorization;
        this.workAuthStartDate = workAuthStartDate;
        this.employmentStartDate = employmentStartDate;
        this.employmentEndDate = employmentEndDate;
    }
}