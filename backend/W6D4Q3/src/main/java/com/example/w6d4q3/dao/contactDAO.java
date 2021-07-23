package com.example.w6d4q3.dao;

import com.example.w6d4q3.domain.Contact;
import org.springframework.stereotype.Repository;

@Repository
public class contactDAO extends AbstractHibernateDAO{
    public contactDAO(){ setClazz(Contact.class);}

    public void addContact(Contact contact){save(contact);}
}
