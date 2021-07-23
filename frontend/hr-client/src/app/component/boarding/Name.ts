export class Name{
    firstName: String;
    lastName: String;
    middleName: String;
    preferedName: String;

    
    constructor(
        firstName: String,
        lastName: String,
        middleName: String,
        preferedName: String
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.preferedName = preferedName;
    }
}