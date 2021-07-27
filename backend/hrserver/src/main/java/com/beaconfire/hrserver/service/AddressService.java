package com.beaconfire.hrserver.service;


import com.beaconfire.hrserver.dao.AddressDAO;
import com.beaconfire.hrserver.domain.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AddressService {
    private AddressDAO addressDAO;
    @Autowired
    public void setAddressEntity(com.beaconfire.hrserver.dao.AddressDAO addressDAO){this.addressDAO = addressDAO;}

    public void addAddress(Address addressToAdd){this.addressDAO.addAddress(addressToAdd);}
    public Address getAddressByEmployeeId(int id){return this.addressDAO.getAddressByEmployeeId(id);}
    @Transactional
    public void deleteAddressByEmployeeId(int id){this.addressDAO.deleteAddressByEmployeeId(id);}
}
