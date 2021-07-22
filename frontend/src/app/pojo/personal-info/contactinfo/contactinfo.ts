export class Contactinfo {
    cellPhone : String;
    workPhone: String;
    personalEmail : String;
    workEmail : String;

    constructor(
        cellPhone: String,
        workPhone : String,
        personalEmail : String,
        workEmail : String
    ){
        this.cellPhone = cellPhone,
        this.workPhone = workPhone,
        this.personalEmail = personalEmail,
        this.workEmail = workEmail
    }
}