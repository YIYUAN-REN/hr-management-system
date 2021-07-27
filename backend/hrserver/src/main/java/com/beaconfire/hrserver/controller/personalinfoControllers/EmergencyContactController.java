
package com.beaconfire.hrserver.controller.personalinfoControllers;

import com.beaconfire.hrserver.common.ResponseStatus;
import com.beaconfire.hrserver.response.personalinfoResponses.*;
import com.beaconfire.hrserver.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/personalinfo/emergencyContact")
public class EmergencyContactController {
    public EmergencyContactResponse emergencyContactResponse;


    EmergencyContactController() {
        emergencyContactResponse = new EmergencyContactResponse();
        emergencyContactResponse.setEmergencyContactList(new ArrayList<EmergencyContact>());

        EmergencyContact ec1 = new EmergencyContact();
        ec1.setFullName("Daniel Wang");
        ec1.setPhone("7549235134");
//        Address address1 = new Address();
//        address1.setLineOne("912 Inverness Way");
//        address1.setLineTwo("Apartment Cuperia");
//        address1.setCity("Arizonta");
//        address1.setState("Illinoise");
//        address1.setZip("61820");
//        ec1.setAddress(address1);
//
//        EmergencyContact ec2 = new EmergencyContact();
//        ec2.setFullName("Erica Jane");
//        ec2.setPhone("9834398741");
//        Address address2 = new Address();
//        address2.setLineOne("978 University St. Roselle");
//        address2.setLineTwo("Building Clessvel");
//        address2.setCity("Rosselle");
//        address2.setState("Illinoise");
//        address2.setZip("60172");
//        ec2.setAddress(address2);
//
//        emergencyContactResponse.getEmergencyContactList().add(ec1);
//        emergencyContactResponse.getEmergencyContactList().add(ec2);
    }
    @Autowired
    private EmployeeService employeeSerive;


    @GetMapping("/{employeeId}")
    public List<EmergencyContact> getEmergencyContactById(@PathVariable String employeeId) {
//        EmergencyContactResponse response = new EmergencyContactResponse();
//        response.setEmergencyContactList(new ArrayList<EmergencyContact>());
//
//        try {
//            response.setEmergencyContactList(emergencyContactResponse.getEmergencyContactList());
//            com.beaconfire.hrserver.common.ResponseStatus status = new ResponseStatus(true, "Matched account found");
//
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }

        List<EmergencyContact> returnList = new ArrayList<EmergencyContact>();
        returnList.add(emergencyContactResponse.getEmergencyContactList().get(0));
        returnList.add(emergencyContactResponse.getEmergencyContactList().get(1));
        return returnList;
    }

    // Update user record
    @PutMapping("/updateemergencycontact")
    public void updateEmergencyContact(@RequestBody List<EmergencyContact> newEmergencyContact) {

        try {
//            employeeService.updateUser(employee);
            emergencyContactResponse.setEmergencyContactList(newEmergencyContact);

        }catch(NoSuchElementException ex){
            // log the error message
            System.out.println(ex.getMessage());

        }
        return;
    }
}
