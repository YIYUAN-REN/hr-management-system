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
public class ContactinfoResponse {
    //    private ResponseStatus status;
//    private Employee employee;
    private String personalEmail;
    private String workEmail;
    private String cellPhone;
    private String workPhone;
}
