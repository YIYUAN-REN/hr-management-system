package com.beaconfire.hrserver.controller.personalinfoControllers;

import com.beaconfire.hrserver.common.ResponseStatus;
import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.response.personalinfoResponses.NameResponse;
import com.beaconfire.hrserver.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/personalinfo/name")
public class NameController {
    public NameResponse name;
    

    NameController() {
        name = new NameResponse();
        name.setLegalName("roxy");
        name.setPreferedName("xiaofei");
        name.setSsn("ysca2309sda");
        name.setGender("femail");
        name.setAvatar("eare");
        name.setAge(100);

    }
    @Autowired
    private EmployeeService employeeSerive;


    @GetMapping("/{employeeId}")
    public NameResponse getNameById(@PathVariable String employeeId) {
        NameResponse nameResponse = new NameResponse();

//        Employee employee = new Employee();

        nameResponse.setLegalName(name.getLegalName());
        nameResponse.setPreferedName(name.getPreferedName());
        nameResponse.setSsn(name.getSsn());
        nameResponse.setGender(name.getGender());
        nameResponse.setAvatar(name.getAvatar());
        nameResponse.setAge(name.getAge());

        ResponseStatus status = new ResponseStatus(true, "Matched account found");

//        response.setEmployee(employee);
//        response.setStatus(status);
        return nameResponse;
    }

    // Update user record
    @PutMapping("/updatename")
    public void updateUser(@RequestBody NameResponse newName) {

        try {
//            employeeService.updateUser(employee);
            name.setLegalName(newName.getLegalName());
            name.setPreferedName(newName.getPreferedName());
            name.setSsn(newName.getSsn());
            name.setGender(newName.getGender());
            name.setAvatar(newName.getAvatar());
            name.setAge(newName.getAge());



        }catch(NoSuchElementException ex){
            // log the error message
            System.out.println(ex.getMessage());

        }
        return;
    }
}
