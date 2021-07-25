package com.beaconfire.hrserver.response;

import com.beaconfire.hrserver.domain.Address;
import com.beaconfire.hrserver.domain.Contact;
import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.VisaStatus;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ApplicationDetailResponse {
    private Employee employee;
    private List<Contact> emergency;
    private VisaStatus visa;
    private Address address;
}
