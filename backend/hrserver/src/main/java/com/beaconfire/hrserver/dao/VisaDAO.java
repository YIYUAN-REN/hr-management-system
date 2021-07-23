package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.Visa;
import com.beaconfire.hrserver.domain.VisaStatus;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class VisaDAO extends AbstractHibernateDAO{
    @Autowired
    private SessionFactory sessionFactory;

    public VisaDAO(){setClazz(VisaStatus.class);}

    public void addVisa(VisaStatus visaToAdd){save(visaToAdd);}

    public VisaStatus getVisaByEmployeeId(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        return session.get(VisaStatus.class,employeeId);
    }

    public void updateVisaType(VisaStatus visa){
        Session session = sessionFactory.getCurrentSession();
        session.update(visa);
    }
}
