//package com.beaconfire.hrserver.controller.personalinfoControllers;
//
//import com.beaconfire.hrserver.common.ResponseStatus;
//import com.beaconfire.hrserver.domain.Employee;
////import com.beaconfire.hrserver.response.personalinfoResponses.Address;
//import com.beaconfire.hrserver.response.personalinfoResponses.AddressResponse;
//import com.beaconfire.hrserver.response.personalinfoResponses.EmploymentResponse;
//import com.beaconfire.hrserver.response.personalinfoResponses.NameResponse;
//import com.beaconfire.hrserver.service.EmployeeService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Date;
//import java.util.NoSuchElementException;
//
//@RestController
//@CrossOrigin(origins="http://localhost:4200")
//@RequestMapping("/personalinfo/employment")
//public class EmploymentController {
//    public EmploymentResponse employment;
//
//
//    EmploymentController() {
//        employment = new EmploymentResponse();
//        employment.setWorkAuthorization("OPT");
//        employment.setTitle("Backend Developer");
//        employment.setWorkAuthStartDate("2021-07-01");
//        employment.setWorkAuthEndDate("2022-07-01");
//        employment.setEmploymentStartDate("2021-05-22");
//        employment.setEmploymentEndDate("2022-08-01");
//    }
//    @Autowired
//    private EmployeeService employeeSerive;
//
//
//    @GetMapping("/{employeeId}")
//    public EmploymentResponse getEmploymentById(@PathVariable String employeeId) {
//        EmploymentResponse response = new EmploymentResponse();
//
////        Employee employee = new Employee();
//        response.setTitle(employment.getTitle());
//        response.setWorkAuthorization(employment.getWorkAuthorization());
//        response.setWorkAuthStartDate(employment.getWorkAuthStartDate());
//        response.setWorkAuthEndDate(employment.getWorkAuthEndDate());
//        response.setEmploymentStartDate(employment.getEmploymentStartDate());
//        response.setEmploymentEndDate(employment.getEmploymentEndDate());
//
//
//        ResponseStatus status = new ResponseStatus(true, "Matched account found");
//
////        response.setEmployee(employee);
////        response.setStatus(status);
//        return response;
//    }
//
//    // Update user record
//    @PutMapping("/updateemployment")
//    public void updateEmployment(@RequestBody EmploymentResponse newEmployment) {
//
//        try {
////            employeeService.updateUser(employee);
//            employment.setTitle(newEmployment.getTitle());
//            employment.setWorkAuthorization(newEmployment.getWorkAuthorization());
//            employment.setWorkAuthStartDate(newEmployment.getWorkAuthStartDate());
//            employment.setWorkAuthEndDate(newEmployment.getWorkAuthEndDate());
//            employment.setEmploymentStartDate(newEmployment.getEmploymentStartDate());
//            employment.setEmploymentEndDate(newEmployment.getEmploymentEndDate());
//
//
//
//        }catch(NoSuchElementException ex){
//            // log the error message
//            System.out.println(ex.getMessage());
//
//        }
//        return;
//    }
//}
