import { Address } from "../address/address";

export class AddressInfo {
    primaryAddress : Address;
    secondaryAddress : Address;

    constructor(
        primaryAddress : Address,
        secondaryAddress : Address
    ){
        this.primaryAddress = primaryAddress,
        this.secondaryAddress = secondaryAddress
    }
}