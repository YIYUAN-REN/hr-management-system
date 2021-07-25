export class Address {
    lineOne : String;
    lineTwo: String;
    city : String;
    state : String;
    zip : String;

    
    constructor(
        lineOne: String = "line one",
        lineTwo : String = "line two",
        city : String = "city",
        state : String = "state",
        zip : String = "zip"
    ){
        this.lineOne = lineOne,
        this.lineTwo = lineTwo,
        this.city = city,
        this.state = state,
        this.zip = zip
    }
    
}