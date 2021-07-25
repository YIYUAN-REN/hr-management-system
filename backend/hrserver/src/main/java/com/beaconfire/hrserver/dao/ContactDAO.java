package com.beaconfire.hrserver.dao;
import com.beaconfire.hrserver.domain.Contact;
import com.beaconfire.hrserver.domain.House;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

@Repository
public class ContactDAO extends AbstractHibernateDAO{
    public ContactDAO(){ setClazz(Contact.class);}

    public void addContact(Contact contact){save(contact);}

    public Integer addLandlord(String firstName, String lastName, String cellPhone, String email, int employeeId){
        Session session = sessionFactory.getCurrentSession();
        Contact contact = new Contact();
        contact.setFirstName(firstName);
        contact.setLastName(lastName);
        contact.setCellPhone(cellPhone);
        contact.setEmail(email);
        contact.setEmployeeId(employeeId);
        contact.setRelationship("landlord");
        contact.setIsReference((byte)0);
        contact.setIsEmergency((byte)0);
        contact.setIsLandLord((byte)1);
        return (Integer)session.save(contact);
    }

    public Contact getContactById(int id) {
        Session session = sessionFactory.getCurrentSession();
        Contact contact = session.get(Contact.class, id);
        return contact;
    }
}
