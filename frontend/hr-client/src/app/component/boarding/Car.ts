export class Car{
    car: String;
    haveLiscense: String;
    driverLiscense: String;
    expirationDate: String;

    constructor(
        car: String,
        haveLiscence: String,
        driverLiscense: String,
        expirationDate: String
    ){
        this.car = car;
        this.haveLiscense = haveLiscence;
        this.driverLiscense = driverLiscense;
        this.expirationDate = expirationDate;
    }
}