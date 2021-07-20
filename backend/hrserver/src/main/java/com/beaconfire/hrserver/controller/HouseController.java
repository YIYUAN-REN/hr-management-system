package com.beaconfire.hrserver.controller;

import com.beaconfire.hrserver.common.ResponseStatus;
import com.beaconfire.hrserver.domain.House;
import com.beaconfire.hrserver.request.FacilityReportRequest;
import com.beaconfire.hrserver.response.FacilityReportResponse;
import com.beaconfire.hrserver.response.HouseDetailResponse;
import com.beaconfire.hrserver.service.FacilityService;
import com.beaconfire.hrserver.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hr")
public class HouseController {
    @Autowired
    private HouseService houseService;

    @Autowired
    private FacilityService facilityService;

    @GetMapping("/houseDetail/{employeeId}")
    public HouseDetailResponse getHouseDetail(@PathVariable String employeeId) {
        HouseDetailResponse response = new HouseDetailResponse();
        House house = houseService.getHouseByEmployeeId(Integer.parseInt(employeeId));
        response.setId(house.getId());
        response.setAddress(house.getAddress());
        response.setEmployees(houseService.getEmployeesByHouse(house));
        return response;
    }

    @PostMapping(value = "/facilityReport", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public FacilityReportResponse postFacilityReport(@RequestBody FacilityReportRequest request){
        FacilityReportResponse response = new FacilityReportResponse();
        Integer facilityReportId = facilityService.postFacilityReport(request.getId(), request.getTitle(), request.getEmployeeId(), request.getDescription());
        response.setStatus(new ResponseStatus(true, facilityReportId != null ? "Success!" : "Fail!"));
        return response;
    }

//    @GetMapping("/facilityReportDetail/{id}")
//    public FacilityReportDetailResponse getFacilityReportDetail(@PathVariable String id){
//        FacilityReportDetailResponse response = new FacilityReportDetailResponse();
//        response.setFacilityReport(facilityService.getFacilityReportById(id));
//        response.setFacilityReportDetail(facilityService.getFacilityReportDetailByFacilityReportId(id));
//        return response;
//    }
}
