export class EmployeeAddress{
    addressLine1: String;
    addressLine2: String;
    city: String;
    zipCode: String;
    stateName: String;
    stateAbbr:String;

    constructor(
        addressLine1: String,
        addressLine2: String,
        city: String,
        zipCode: String,
        stateName: String,
        stateAbbr:String
    ){
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.zipCode = zipCode;
        this.stateName = stateName;
        this.stateAbbr = stateAbbr;
    }
}