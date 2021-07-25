package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.domain.Contact;
import com.beaconfire.hrserver.dao.ContactDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    private ContactDAO contactDAO;
    @Autowired
    public void setContactEntity(ContactDAO contactDAO){this.contactDAO = contactDAO;}

    public void addContact(Contact contactToAdd){this.contactDAO.addContact(contactToAdd);}
}
