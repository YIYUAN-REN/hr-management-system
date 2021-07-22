export class Name {
    age : number;
    avatar: String;
    ssn : String;
    preferedName : String;
    legalName : String;
    gender: String;

    constructor(
        age : number,
        avatar: String,
        ssn : String,
        preferedName : String,
        legalName : String,
        gender: String,
    ){
        this.age = age;
        this.avatar = avatar;
        this.ssn = ssn;
        this.preferedName = preferedName;
        this.legalName = legalName;
        this.gender = gender;
    }
}