import { Car } from "./Car";
import { Contact } from "./Contact";
import { Identity } from "./Identity";
import { Position } from "./Position";

export class Employee{
    id: number;
    userId: number;
    identity: Identity;
    contact: Contact;
    position: Position;
    car: Car;
    houseId: String;

    constructor(
        id: number,
        userId: number,
        identity: Identity,
        contact: Contact,
        position: Position,
        car: Car,
        houseId: String,
    ){
        this.id = id;
        this.userId = userId;
        this.identity = identity;
        this.contact = contact;
        this.position = position;
        this.car = car;
        this.houseId = houseId;
    }
}