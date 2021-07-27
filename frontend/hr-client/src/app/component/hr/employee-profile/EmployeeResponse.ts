import { EmergencyContact } from "../../employee/personal-info/pojo/EmergencyContact/EmergencyContact";
import { Address } from "../../employee/personal-info/pojo/address/address";
import { AddressInfo } from "../../employee/personal-info/pojo/addressInfo/address-info";
import { Employment } from "../../employee/personal-info/pojo/employment/employment";
import { Contactinfo } from "../../employee/personal-info/pojo/contactinfo/contactinfo";
import { Name } from "../../employee/personal-info/pojo/name/name";
import { Document } from "../../employee/personal-info/pojo/document/document";


export class EmployeeResponse {
    name : Name
    contactinfo : Contactinfo
    employment : Employment
    emergencyContact : EmergencyContact
    document : Document
    addressinfo : AddressInfo
    primaryAddress!: Address;
    secondaryAddress! : Address;
    
    constructor(
        name = new Name(),
        contactinfo = new Contactinfo(),
        employment = new Employment(),
        emergencyContact = new EmergencyContact(),
        document = new Document(),
        addressinfo = new AddressInfo(),
        primaryAddress : Address = new Address(),
        secondaryAddress : Address = new Address()
    ){
        this.name = name;
        this.contactinfo = contactinfo;
        this.employment = employment;
        this.emergencyContact = emergencyContact;
        this.document = document;
        this.addressinfo = addressinfo;
        this.addressinfo.primaryAddress = primaryAddress;
        this.addressinfo.secondaryAddress = secondaryAddress;
        
    }
    
}