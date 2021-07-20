package com.beaconfire.hrserver.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FacilityReportRequest {
    private int id;
    private String title;
    private int employeeId;
    private String description;
}
