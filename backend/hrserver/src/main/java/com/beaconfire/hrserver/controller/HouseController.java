package com.beaconfire.hrserver.controller;

import com.beaconfire.hrserver.domain.House;
import com.beaconfire.hrserver.response.HouseDetailResponse;
import com.beaconfire.hrserver.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hr")
public class HouseController {
    @Autowired
    private HouseService houseService;

    @GetMapping("/getHouseDetail/{employeeId}")
    public HouseDetailResponse getHouseDetail(@PathVariable String employeeId) {
        HouseDetailResponse response = new HouseDetailResponse();
        House house = houseService.getHouseByEmployeeId(Integer.parseInt(employeeId));
        response.setId(house.getId());
        response.setAddress(house.getAddress());
        response.setEmployees(houseService.getEmployeesByHouse(house));
        return response;
    }
}
