export class Address {
    lineOne : String;
    lineTwo: String;
    city : String;
    state : String;
    zip : String;

    constructor(
        lineOne: String,
        lineTwo : String,
        city : String,
        state : String,
        zip : String
    ){
        this.lineOne = lineOne,
        this.lineTwo = lineTwo,
        this.city = city,
        this.state = state,
        this.zip = zip
    }
}