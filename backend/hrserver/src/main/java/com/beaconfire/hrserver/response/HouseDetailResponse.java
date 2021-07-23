package com.beaconfire.hrserver.response;

import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.FacilityReport;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class HouseDetailResponse {
    private int id;
    private String address;
    private List<Employee> employees;
    private List<FacilityReport> reports;
}
