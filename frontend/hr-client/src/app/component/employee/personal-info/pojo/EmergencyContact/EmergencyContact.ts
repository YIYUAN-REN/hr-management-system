import { Address } from "../address/address";

export class EmergencyContact {

    fullName : String;
    phone: String;
    address : Address;

    constructor(
        fullName : String = "full name",
        phone: String = "phone",
        address : Address = new Address()
    ){
        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
    }
}