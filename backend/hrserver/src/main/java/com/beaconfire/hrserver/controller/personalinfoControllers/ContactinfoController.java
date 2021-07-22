
package com.beaconfire.hrserver.controller.personalinfoControllers;

import com.beaconfire.hrserver.common.ResponseStatus;
import com.beaconfire.hrserver.response.personalinfoResponses.ContactinfoResponse;
import com.beaconfire.hrserver.response.personalinfoResponses.NameResponse;
import com.beaconfire.hrserver.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/personalinfo/contactinfo")
public class ContactinfoController {
    public ContactinfoResponse contactinfo;


    ContactinfoController() {
        contactinfo = new ContactinfoResponse();
        contactinfo.setCellPhone("2177215297");
        contactinfo.setWorkPhone("6587543975");
        contactinfo.setPersonalEmail("roxuluoxi@gmail.com");
        contactinfo.setWorkEmail("xioaer@126.com");
    }
    @Autowired
    private EmployeeService employeeSerive;


    @GetMapping("/{employeeId}")
    public ContactinfoResponse getContactinfoById(@PathVariable String employeeId) {
        ContactinfoResponse response = new ContactinfoResponse();

//        Employee employee = new Employee();

        response.setWorkPhone(contactinfo.getWorkPhone());
        response.setCellPhone(contactinfo.getCellPhone());
        response.setWorkEmail(contactinfo.getWorkEmail());
        response.setPersonalEmail(contactinfo.getPersonalEmail());

        com.beaconfire.hrserver.common.ResponseStatus status = new ResponseStatus(true, "Matched account found");

//        response.setEmployee(employee);
//        response.setStatus(status);
        return response;
    }

    // Update user record
    @PutMapping("/updatecontactinfo")
    public void updateContactinfo(@RequestBody ContactinfoResponse newContactinfo) {

        try {
//            employeeService.updateUser(employee);
            contactinfo.setWorkPhone(newContactinfo.getWorkPhone());
            contactinfo.setCellPhone(newContactinfo.getCellPhone());
            contactinfo.setPersonalEmail(newContactinfo.getPersonalEmail());
            contactinfo.setWorkEmail(newContactinfo.getWorkEmail());

        }catch(NoSuchElementException ex){
            // log the error message
            System.out.println(ex.getMessage());

        }
        return;
    }
}
