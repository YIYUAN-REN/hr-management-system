package com.beaconfire.hrserver.dao;
import com.beaconfire.hrserver.domain.Contact;
import org.springframework.stereotype.Repository;

@Repository
public class contactDAO extends AbstractHibernateDAO{
    public contactDAO(){ setClazz(Contact.class);}

    public void addContact(Contact contact){save(contact);}
}
