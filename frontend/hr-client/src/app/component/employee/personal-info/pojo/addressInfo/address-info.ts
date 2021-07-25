import { Address } from "../address/address";

export class AddressInfo {
    primaryAddress : Address;
    secondaryAddress : Address;

    constructor(
        primaryAddress : Address = new Address(),
        secondaryAddress : Address = new Address()
    ){
        this.primaryAddress = primaryAddress,
        this.secondaryAddress = secondaryAddress
    }
}