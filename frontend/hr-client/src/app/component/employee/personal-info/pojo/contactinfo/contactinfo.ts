export class Contactinfo {
    cellPhone : String;
    workPhone: String;
    personalEmail : String;
    workEmail : String;

    constructor(
        cellPhone: String = "cellPhone",
        workPhone : String = "workPhone",
        personalEmail : String = "personalEmail",
        workEmail : String = "workEmail"
    ){
        this.cellPhone = cellPhone,
        this.workPhone = workPhone,
        this.personalEmail = personalEmail,
        this.workEmail = workEmail
    }
}