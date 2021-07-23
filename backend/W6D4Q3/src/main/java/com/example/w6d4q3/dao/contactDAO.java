package com.example.w6d4q3.dao;

import com.example.w6d4q3.domain.ContactEntity;
import org.springframework.stereotype.Repository;

@Repository
public class contactDAO extends AbstractHibernateDAO{
    public contactDAO(){ setClazz(ContactEntity.class);}

    public void addContact(ContactEntity contact){save(contact);}
}
