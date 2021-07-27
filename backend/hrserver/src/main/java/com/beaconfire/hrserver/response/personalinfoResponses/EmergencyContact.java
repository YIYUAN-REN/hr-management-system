package com.beaconfire.hrserver.response.personalinfoResponses;

import com.beaconfire.hrserver.domain.Address;
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
public class EmergencyContact {
    //    private ResponseStatus status;
//    private Employee employee;
    private String fullName;
    private String phone;
    private Address address;
}
