export class Name {
    age : number;
    avatar: String;
    ssn : String;
    preferedName : String;
    legalName : String;
    gender: String;

    constructor(
        age : number = 1,
        avatar: String = "avatar",
        ssn : String = "ssn",
        preferedName : String = "prefered Name",
        legalName : String = "legal Name",
        gender: String = "gender",
    ){
        this.age = age;
        this.avatar = avatar;
        this.ssn = ssn;
        this.preferedName = preferedName;
        this.legalName = legalName;
        this.gender = gender;
    }
}