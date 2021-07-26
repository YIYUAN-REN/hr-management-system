import { Car } from "./Car";
import { Contact } from "./Contact";
import { Emergency } from "./Emergency";
import { EmployeeAddress } from "./EmployeeAddress";
import { Name } from "./Name";
import { OtherIdentity } from "./OtherIdentity";
import { Reference } from "./Reference";
import { Visa } from "./Visa";

export class BoardingPackage{
    userId:String;
    name:Name;
    otherId: OtherIdentity;
    address:EmployeeAddress;
    contact:Contact;
    car: Car;
    visa: Visa;
    refer: Reference;
    emegencies: Emergency;

    constructor(
        userId:String,
        name:Name,
        otherId:OtherIdentity,
        address:EmployeeAddress,
        contact:Contact,
        car: Car,
        visa: Visa,
        refer: Reference,
        emegencies: Emergency
    ){
        this.userId = userId;
        this.name = name;
        this.otherId = otherId;
        this.address = address;
        this.contact = contact;
        this.car = car;
        this.visa = visa;
        this.refer = refer;
        this.emegencies = emegencies;
    }
}