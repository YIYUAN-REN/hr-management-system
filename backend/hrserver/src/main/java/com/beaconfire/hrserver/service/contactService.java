package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.domain.Contact;
import com.beaconfire.hrserver.dao.contactDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class contactService {
    private contactDAO contactDAO;
    @Autowired
    public void setContactEntity(contactDAO contactDAO){this.contactDAO = contactDAO;}

    public void addContact(Contact contactToAdd){this.contactDAO.addContact(contactToAdd);}
}
