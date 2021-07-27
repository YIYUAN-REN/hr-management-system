package com.beaconfire.hrserver.response;

import com.beaconfire.hrserver.domain.Employee;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class VisaMainResponse {
    private List<Employee> Employees;
    private List<String> workAuth;
    private List<Integer> days;
    private List<List<String>> Files;
    private List<String> status;

}
