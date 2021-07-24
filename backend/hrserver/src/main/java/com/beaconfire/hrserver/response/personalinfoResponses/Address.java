package com.beaconfire.hrserver.response.personalinfoResponses;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Address {
    //    private ResponseStatus status;
//    private Employee employee;
    private String lineOne;
    private String lineTwo;
    private String city;
    private String state;
    private String zip;
}
