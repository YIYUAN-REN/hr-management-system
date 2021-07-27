package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.EmployeeDAO;
import com.beaconfire.hrserver.domain.Contact;
import com.beaconfire.hrserver.dao.ContactDAO;
import com.beaconfire.hrserver.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactService {
    private ContactDAO contactDAO;
    private EmployeeDAO employeeDAO;

    @Autowired
    public void setContactEntity(ContactDAO contactDAO){this.contactDAO = contactDAO;}

    public void addContact(Contact contactToAdd){this.contactDAO.addContact(contactToAdd);}

    @Transactional
    public List<Contact> getEmergencyContactsByEmployeeId(int employeeId){
        List<Contact> result = this.contactDAO.getEmergencyContactsByEmployeeId(employeeId)
                .stream().filter((Contact con)->!con.getRelationship().equals("self")).collect(Collectors.toList());
        return result;
    }

    @Transactional
    public Integer addLandlord(String firstName, String lastName, String cellPhone, String email) {
        // find employeeId from Employee table (assume landlord is also an employee)
//        Employee employee = employeeDAO.findEmployeeByEmail(email);
        Integer contactId = contactDAO.addLandlord(firstName, lastName, cellPhone, email, 1);
        return contactId;
    }
    @Transactional
    public void deleteContactByEmployeeId(int id){this.contactDAO.deleteContactByEmployeeId(id);}
}
