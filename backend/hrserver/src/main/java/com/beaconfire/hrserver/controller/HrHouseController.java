package com.beaconfire.hrserver.controller;

import com.beaconfire.hrserver.domain.House;
import com.beaconfire.hrserver.response.AllHouseResponse;
import com.beaconfire.hrserver.response.NewHouseResponse;
import com.beaconfire.hrserver.service.FacilityService;
import com.beaconfire.hrserver.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hr/housing")
public class HrHouseController {
    @Autowired
    private HouseService houseService;

    @Autowired
    private FacilityService facilityService;

    @GetMapping("/getAllHouse")
    public AllHouseResponse getAllHouse(){
        AllHouseResponse response = new AllHouseResponse();
        List<House> houses = houseService.getAllHouse();
        response.setHouses(houses);
        return response;
    }

//    @PostMapping(value = "/postHouse")
//    public NewHouseResponse postHouse(@RequestBody NewHouseRequest request){
//
//        return response;
//    }
}
