package com.beaconfire.hrserver.response.personalinfoResponses;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EmergencyContactResponse {
    //    private ResponseStatus status;
//    private Employee employee;
    List<EmergencyContact> emergencyContactList;
}
