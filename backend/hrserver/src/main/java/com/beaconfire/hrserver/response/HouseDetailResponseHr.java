package com.beaconfire.hrserver.response;

import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.Facility;
import com.beaconfire.hrserver.domain.FacilityReport;
import com.beaconfire.hrserver.domain.House;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class HouseDetailResponseHr {
    private int id;
    private House house;
    private List<Employee> employees;
    private List<Facility> facilities;
    private List<FacilityReport> reports;
}
