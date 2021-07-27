//package com.beaconfire.hrserver.controller.personalinfoControllers;
//
//import com.beaconfire.hrserver.common.ResponseStatus;
//import com.beaconfire.hrserver.domain.Employee;
////import com.beaconfire.hrserver.response.personalinfoResponses.Address;
//import com.beaconfire.hrserver.response.personalinfoResponses.AddressResponse;
//import com.beaconfire.hrserver.response.personalinfoResponses.NameResponse;
//import com.beaconfire.hrserver.service.EmployeeService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.NoSuchElementException;
//
//@RestController
//@CrossOrigin(origins="http://localhost:4200")
//@RequestMapping("/personalinfo/address")
//public class AddressController {
//    public AddressResponse address;
//
//
//    AddressController() {
//        address = new AddressResponse();
////        Address ad1 = new Address("1010 W Main", "University Group", "Champaign", "Illinois", "61801");
////        Address ad2 = new Address("505 Gree Str", "Capstone", "Champaign", "Illinois", "61801");
////        address.setPrimaryAddress(ad1);
////        address.setSecondaryAddress(ad2);
//    }
//    @Autowired
//    private EmployeeService employeeSerive;
//
//
//    @GetMapping("/{employeeId}")
//    public AddressResponse getAddressById(@PathVariable String employeeId) {
//        AddressResponse response = new AddressResponse();
//
////        Employee employee = new Employee();
//        response.setSecondaryAddress(address.getSecondaryAddress());
//        response.setPrimaryAddress(address.getPrimaryAddress());
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
//    @PutMapping("/updateaddress")
//    public void updateAddress(@RequestBody AddressResponse newAddress) {
//
//        try {
////            employeeService.updateUser(employee);
//            address.setPrimaryAddress(newAddress.getPrimaryAddress());
//            address.setSecondaryAddress(newAddress.getSecondaryAddress());
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
