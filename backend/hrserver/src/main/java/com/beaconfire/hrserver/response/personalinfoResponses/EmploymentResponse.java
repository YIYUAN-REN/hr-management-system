package com.beaconfire.hrserver.response.personalinfoResponses;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EmploymentResponse {
    //    private ResponseStatus status;
//    private Employee employee;
    private String workAuthorization;
    private String title;
    private String workAuthStartDate;
    private String workAuthEndDate;
    private String employmentStartDate;
    private String employmentEndDate;
}
