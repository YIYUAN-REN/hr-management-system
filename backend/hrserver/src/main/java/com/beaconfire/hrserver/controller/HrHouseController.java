package com.beaconfire.hrserver.controller;

import com.beaconfire.hrserver.common.ResponseStatus;
import com.beaconfire.hrserver.domain.Contact;
import com.beaconfire.hrserver.domain.House;
import com.beaconfire.hrserver.request.NewHouseRequest;
import com.beaconfire.hrserver.response.AllHouseResponse;
import com.beaconfire.hrserver.response.HouseDetailResponse;
import com.beaconfire.hrserver.response.HouseDetailResponseHr;
import com.beaconfire.hrserver.response.NewHouseResponse;
import com.beaconfire.hrserver.service.ContactService;
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
    private ContactService contactService;

    @GetMapping("/getAllHouse")
    public AllHouseResponse getAllHouse(){
        AllHouseResponse response = new AllHouseResponse();
        List<House> houses = houseService.getAllHouse();
        List<Contact> contacts = houseService.getContactsByHouses(houses);
        response.setHouses(houses);
        response.setContacts(contacts);
        return response;
    }

    @PostMapping(value = "/postHouse")
    public NewHouseResponse postHouse(@RequestBody NewHouseRequest request){
        NewHouseResponse response = new NewHouseResponse();
        Integer contactId = contactService.addLandlord(request.getFirstName(), request.getLastName(), request.getCellPhone(), request.getEmail());
        if (contactId == null) {
            response.setStatus(new ResponseStatus(true, "Fail to add landlord!"));
            return response;
        }

        Integer houseId = houseService.addHouse(contactId, request.getAddress(), 0);
        if (houseId == null) {
            response.setStatus(new ResponseStatus(true, "Fail to add house!"));
            return response;
        }

        response.setStatus(new ResponseStatus(true, "Success!"));
        return response;
    }

    @GetMapping(value = "/getHouseDetailById/{id}")
    public HouseDetailResponseHr getHouseDetailById(@PathVariable Integer id){
        HouseDetailResponseHr response = new HouseDetailResponseHr();
        House house = houseService.getHouseById(id);
        response.setId(id);
        response.setHouse(house);
        response.setEmployees(houseService.getEmployeesByHouse(house));
        response.setFacilities(houseService.getFacilitiesByHouse(house));
        response.setReports(houseService.getFacilityReportByHouse(house));
        return response;
    }
}
