export class Visa{
    citizen: String;
    citizenType: String;
    visaType: String;
    otherVisaType: String;
    startDate: String;
    endDate: String;

    constructor(
        citizen: String,
        citizenType: String,
        visaType: String,
        otherVisaType: String,
        startDate: String,
        endDate: String
    ){
        this.citizen = citizen;
        this.citizenType = citizenType;
        this.visaType = visaType;
        this.otherVisaType = otherVisaType;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}