export class Emergency{
    firstName: String;
    lastName: String;
    middleName: String;
    phone: String;
    email: String;
    relation: String;

    constructor(
        firstName: String,
        lastName: String,
        middleName: String,
        phone: String,
        email: String,
        relation: String
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.phone = phone;
        this.email = email;
        this.relation = relation;
    }
}