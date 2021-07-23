import { Car } from "./Car";
import { Contact } from "./Contact";
import { Name } from "./Name";
import { OtherIdentity } from "./OtherIdentity";
import { Position } from "./Position";

export class Employee{
    id: number;
    userId: number;
    name: Name;
    otherIdentity: OtherIdentity;
    contact: Contact;
    position: Position;
    car: Car;
    houseId: String;

    constructor(
        id: number,
        userId: number,
        name: Name,
        otherIdentity: OtherIdentity,
        contact: Contact,
        position: Position,
        car: Car,
        houseId: String,
    ){
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.otherIdentity = otherIdentity;
        this.contact = contact;
        this.position = position;
        this.car = car;
        this.houseId = houseId;
    }
}