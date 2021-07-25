package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.Address;
import com.beaconfire.hrserver.domain.VisaStatus;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class VisaDAO extends AbstractHibernateDAO{
    @Autowired
    private SessionFactory sessionFactory;

    public VisaDAO(){setClazz(VisaStatus.class);}

    public void addVisa(VisaStatus visaToAdd){save(visaToAdd);}

    public VisaStatus getVisaByEmployeeId(int employeeId){
        Session session = sessionFactory.getCurrentSession();
//        return session.get(VisaStatus.class,employeeId);
        String get = "from VisaStatus visa where visa.employeeId=:employeeId";
        Query query = session.createQuery(get);
        query.setParameter("employeeId", employeeId);
        List<VisaStatus> results = query.getResultList();
        if (results.size()>0) return results.get(0);
        else return null;
    }

    public void updateVisaType(VisaStatus visa){
        Session session = sessionFactory.getCurrentSession();
        session.update(visa);
    }
}
