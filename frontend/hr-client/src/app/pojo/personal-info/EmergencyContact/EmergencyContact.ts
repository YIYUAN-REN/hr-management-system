import { Address } from "../address/address";

export class EmergencyContact {

    fullName : String;
    phone: String;
    address : Address;

    constructor(
        fullName : String,
        phone: String,
        address : Address
    ){
        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
    }
}