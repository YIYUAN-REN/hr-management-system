package com.example.w6d4q3.service;

import com.example.w6d4q3.dao.contactDAO;
import com.example.w6d4q3.domain.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class contactService {
    private contactDAO contactDAO;
    @Autowired
    public void setContactEntity(contactDAO contactDAO){this.contactDAO = contactDAO;}

    public void addContact(Contact contactToAdd){this.contactDAO.addContact(contactToAdd);}
}
