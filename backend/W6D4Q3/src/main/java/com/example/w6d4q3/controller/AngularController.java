package com.example.w6d4q3.controller;

import com.example.w6d4q3.domain.AddressEntity;
import com.example.w6d4q3.domain.ContactEntity;
import com.example.w6d4q3.domain.EmployeeEntity;
import com.example.w6d4q3.domain.VisaStatusEntity;
import com.example.w6d4q3.service.addressService;
import com.example.w6d4q3.service.contactService;
import com.example.w6d4q3.service.employeeService;
import com.example.w6d4q3.service.visaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.json.*;
import sun.lwawt.macosx.CSystemTray;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/")
public class AngularController {
    private employeeService employeeService;
    private addressService addressService;
    private visaService visaService;
    private contactService contactService;
    @Autowired
    public void setEmployeeService(employeeService employeeService){this.employeeService = employeeService;}
    @Autowired
    public void setAddressService(addressService addressService){this.addressService = addressService;}
    @Autowired
    public void setVisaService(visaService visaService){this.visaService = visaService;}
    @Autowired
    public void setContactService(contactService contactService){this.contactService = contactService;}

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/boarding")
    public void Boarding(@RequestBody String JsonPack){
//        System.out.println(JsonPack);
        JSONObject objPack = new JSONObject(JsonPack);
        EmployeeEntity employee = generateEmployee(objPack);
        int employeeId = this.employeeService.addEmployee(employee);
        AddressEntity address = generateAddress(objPack.getJSONObject("address"), employeeId);
        this.addressService.addAddress(address);
        this.visaService.addVisa(generateVisa(objPack.getJSONObject("visa"), employeeId));
        //normal contact of employee
        this.contactService.addContact(generateNormalContact(objPack, employeeId));
        //emergency contact list
        JSONArray emergencies = objPack.getJSONArray("emegencies");
        for (int i = 0; i < emergencies.length(); i++) {
            this.contactService.addContact(generateEmergencyContact(emergencies.getJSONObject(i), employeeId));
        }
    }

    public EmployeeEntity generateEmployee(JSONObject objPack){
        EmployeeEntity employee = new EmployeeEntity();
        //hardcode
        employee.setUserId(123);
        employee.setTitle("tbd");
        employee.setManagerId(1);
        employee.setStartDate("tbd");
        employee.setEndDate("tbd");
        employee.setHouseId(1);
        //set names
        JSONObject name = objPack.getJSONObject("name");
        employee.setFirstName(name.getString("firstName"));
        employee.setLastName(name.getString("lastName"));
        employee.setMiddleName(name.getString("middleName"));
        employee.setPreferedName(name.getString("preferedName"));
        //set contact
        JSONObject contact = objPack.getJSONObject("contact");
        employee.setCellPhone(contact.getString("cellPhone"));
        employee.setEmail(contact.getString("email"));
        employee.setAlternatePhone(contact.getString("alterPhone"));
        //set other info
        JSONObject otherInfo = objPack.getJSONObject("otherId");
        employee.setGender(otherInfo.getString("gender"));
        employee.setDob(otherInfo.getString("dob"));
        employee.setSsn(otherInfo.getString("ssn"));
        //set car info
        JSONObject car = objPack.getJSONObject("car");
        employee.setCar(car.getString("carInfo"));
        employee.setDriverLicense(car.getString("driverLiscense"));
        employee.setDriverLicenseExpirationDate(car.getString("expirationDate"));

        return employee;
    }
    public AddressEntity generateAddress(JSONObject address, int employeeId){
        AddressEntity addressEntity = new AddressEntity();
        addressEntity.setEmployeeId(employeeId);
        addressEntity.setAddressLine1(address.getString("addressLine1"));
        addressEntity.setAddressLine2(address.getString("addressLine2"));
        addressEntity.setCity(address.getString("city"));
        addressEntity.setZipcode(address.getString("zipCode"));
        addressEntity.setStateName(address.getString("sateName"));
        addressEntity.setStateAbbr(address.getString("stateAbbr"));
        return addressEntity;
    }
    public VisaStatusEntity generateVisa(JSONObject visa, int employeeId){
        VisaStatusEntity visaStatusEntity = new VisaStatusEntity();
        visaStatusEntity.setEmployeeId(employeeId);
        if(visa.getString("citizen").equals("yes")) {
            visaStatusEntity.setVisaType("citizen");
            return visaStatusEntity;
        }
        if(visa.getString("visaType").equals("other")){
            visaStatusEntity.setVisaType(visa.getString("otherVisaType"));
        }
        else visaStatusEntity.setVisaType(visa.getString("visaType"));
        visaStatusEntity.setVisaStartDate(visa.getString("startDate"));
        visaStatusEntity.setVisaEndDate(visa.getString("endDate"));
        visaStatusEntity.setModificationDate(new Date().toString());
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            visaStatusEntity.setActive((byte) (new Date().compareTo(format.parse(visaStatusEntity.getVisaEndDate())) < 0 ? 1 : 0));
        }catch (ParseException e){e.printStackTrace();}
        return visaStatusEntity;
    }
    public ContactEntity generateNormalContact(JSONObject objPack, int employeeId){
        ContactEntity contactEntity = new ContactEntity();
        contactEntity.setEmployeeId(employeeId);
        contactEntity.setIsEmergency((byte)0);
        contactEntity.setRelationship("self");
        //set names
        JSONObject name = objPack.getJSONObject("name");
        contactEntity.setFirstName(name.getString("firstName"));
        contactEntity.setLastName(name.getString("lastName"));
        JSONObject contact = objPack.getJSONObject(("contact"));
        contactEntity.setEmail(contact.getString("email"));
        contactEntity.setCellPhone(contact.getString("cellPhone"));
        return contactEntity;
    }
    public ContactEntity generateEmergencyContact(JSONObject contact, int employeeId){
        ContactEntity contactEntity = new ContactEntity();
        contactEntity.setEmployeeId(employeeId);
        contactEntity.setIsEmergency((byte)1);
        contactEntity.setFirstName(contact.getString("firstName"));
        contactEntity.setLastName(contact.getString("lastName"));
        contactEntity.setCellPhone(contact.getString("phone"));
        contactEntity.setEmail(contact.getString("email"));
        contactEntity.setRelationship(contact.getString("relation"));
        return contactEntity;
    }
}



