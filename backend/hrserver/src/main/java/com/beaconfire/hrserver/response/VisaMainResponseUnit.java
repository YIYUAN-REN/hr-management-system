package com.beaconfire.hrserver.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class VisaMainResponseUnit {
    private String name;
    private String workAuth;
    private String startDate;
    private String expirationDate;
    private int daysLeft;
    private String status;
    private List<String> files;
}
