package com.example.w6d4q3.service;

import com.example.w6d4q3.dao.addressDAO;
import com.example.w6d4q3.domain.AddressEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class addressService {
    private addressDAO addressDAO;
    @Autowired
    public void setAddressEntity(addressDAO addressDAO){this.addressDAO = addressDAO;}

    public void addAddress(AddressEntity addressToAdd){this.addressDAO.addAddress(addressToAdd);}
}
