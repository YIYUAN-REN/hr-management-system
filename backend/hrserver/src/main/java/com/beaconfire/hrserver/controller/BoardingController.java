package com.beaconfire.hrserver.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.beaconfire.hrserver.service.AddressService;
import com.beaconfire.hrserver.service.ContactService;
import com.beaconfire.hrserver.service.EmployeeService;
import com.beaconfire.hrserver.service.VisaService;

import com.beaconfire.hrserver.domain.Address;
import com.beaconfire.hrserver.domain.Contact;
import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.VisaStatus;


@RestController
@RequestMapping("/")
public class BoardingController {
    private EmployeeService employeeService;
    private AddressService addressService;
    private VisaService visaService;
    private ContactService contactService;
    @Autowired
    public void setEmployeeService(EmployeeService employeeService){this.employeeService = employeeService;}
    @Autowired
    public void setAddressService(AddressService addressService){this.addressService = addressService;}
    @Autowired
    public void setVisaService(VisaService visaService){this.visaService = visaService;}
    @Autowired
    public void setContactService(ContactService contactService){this.contactService = contactService;}

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/boarding")
    public void Boarding(@RequestBody String JsonPack) throws JSONException {
//        System.out.println(JsonPack);
        JSONObject objPack = new JSONObject(JsonPack);
        Employee employee = generateEmployee(objPack);
        int employeeId = this.employeeService.addEmployee(employee);
        Address address = generateAddress(objPack.getJSONObject("address"), employeeId);
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

    public Employee generateEmployee(JSONObject objPack) throws JSONException {
        Employee employee = new Employee();
        //hardcode
        employee.setUserId(1);
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
    public Address generateAddress(JSONObject address, int employeeId) throws JSONException {
        Address addressEntity = new Address();
        addressEntity.setEmployeeId(employeeId);
        addressEntity.setAddressLine1(address.getString("addressLine1"));
        addressEntity.setAddressLine2(address.getString("addressLine2"));
        addressEntity.setCity(address.getString("city"));
        addressEntity.setZipcode(address.getString("zipCode"));
        addressEntity.setStateName(address.getString("sateName"));
        addressEntity.setStateAbbr(address.getString("stateAbbr"));
        return addressEntity;
    }
    public VisaStatus generateVisa(JSONObject visa, int employeeId) throws JSONException {
        VisaStatus visaStatus = new VisaStatus();
        visaStatus.setEmployeeId(employeeId);
        if(visa.getString("citizen").equals("yes")) {
            visaStatus.setVisaType("citizen");
            return visaStatus;
        }
        if(visa.getString("visaType").equals("other")){
            visaStatus.setVisaType(visa.getString("otherVisaType"));
        }
        else visaStatus.setVisaType(visa.getString("visaType"));
        visaStatus.setVisaStartDate(visa.getString("startDate"));
        visaStatus.setVisaEndDate(visa.getString("endDate"));
        visaStatus.setModificationDate(new Date().toString());
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            visaStatus.setActive((byte) (new Date().compareTo(format.parse(visaStatus.getVisaEndDate())) < 0 ? 1 : 0));
        }catch (ParseException e){e.printStackTrace();}
        return visaStatus;
    }
    public Contact generateNormalContact(JSONObject objPack, int employeeId) throws JSONException {
        Contact contactEntity = new Contact();
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
    public Contact generateEmergencyContact(JSONObject contact, int employeeId) throws JSONException {
        Contact contactEntity = new Contact();
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



