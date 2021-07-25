import { Name } from "./Name";

export class OtherIdentity{
    gender: String;
    ssn: String;
    dob: String;
    // avartar: String;

    constructor(
        gender: String,
        ssn: String,
        dob: String,
        // avartar: String
    ){
        this.gender = gender;
        this.ssn = ssn;
        this.dob = dob;
        // this.avartar = avartar;
    }
}