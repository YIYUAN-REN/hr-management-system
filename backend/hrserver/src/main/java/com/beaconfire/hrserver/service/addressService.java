package com.beaconfire.hrserver.service;


import com.beaconfire.hrserver.dao.addressDAO;
import com.beaconfire.hrserver.domain.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class addressService {
    private addressDAO addressDAO;
    @Autowired
    public void setAddressEntity(com.beaconfire.hrserver.dao.addressDAO addressDAO){this.addressDAO = addressDAO;}

    public void addAddress(Address addressToAdd){this.addressDAO.addAddress(addressToAdd);}
}
