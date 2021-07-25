import { Name } from "./Name";

export class Identity{
    name: Name;
    gender: String;
    ssn: String;
    dob: String;
    avartar: String;

    constructor(
        name: Name,
        gender: String,
        ssn: String,
        dob: String,
        avartar: String
    ){
        this.name = name;
        this.gender = gender;
        this.ssn = ssn;
        this.dob = dob;
        this.avartar = avartar;
    }
}