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
public class AddressResponse {
    //    private ResponseStatus status;
//    private Employee employee;
    private Address primaryAddress;
    private Address secondaryAddress;
}
