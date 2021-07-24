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
public class NameResponse {
//    private ResponseStatus status;
//    private Employee employee;
      private String legalName;
      private String preferedName;
      private String avatar;
      private Integer age;
      private String gender;
      private String ssn;
}
