package com.example.w6d4q3.service;

import com.example.w6d4q3.dao.addressDAO;
import com.example.w6d4q3.domain.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class addressService {
    private addressDAO addressDAO;
    @Autowired
    public void setAddressEntity(addressDAO addressDAO){this.addressDAO = addressDAO;}

    public void addAddress(Address addressToAdd){this.addressDAO.addAddress(addressToAdd);}
}
