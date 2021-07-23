package com.beaconfire.hrserver.dao;


import com.beaconfire.hrserver.domain.Visa;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class VisaDAO {
    @Autowired
    private SessionFactory sessionFactory;

    public Visa getVisaByEmployeeId(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        return session.get(Visa.class,employeeId);
    }

    public void updateVisaType(Visa visa){
        Session session = sessionFactory.getCurrentSession();
        session.update(visa);
    }
}
