package com.beaconfire.hrserver.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewHouseRequest {
    private String address;
//    private int numberOfPerson;
    private String firstName;
    private String lastName;
    private String cellPhone;
    private String email;
}
