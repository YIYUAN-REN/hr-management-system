package com.beaconfire.hrserver.dao;


import com.beaconfire.hrserver.domain.Visa;
import com.beaconfire.hrserver.domain.ApplicationWorkFlow;
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

    public boolean isInSystem(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        if (session.get(ApplicationWorkFlow.class, employeeId) == null){
            return false;
        }
        return true;
    }

    public void insertNewWorkFlow(int employeeId, String createDate,String modificationDate){
        ApplicationWorkFlow applicationWorkFlow = new ApplicationWorkFlow();
        applicationWorkFlow.setEmployeeId(employeeId);
        applicationWorkFlow.setCreateDate(createDate);
        applicationWorkFlow.setModificationDate(modificationDate);
        applicationWorkFlow.setStatus("nosubmission");
        Session session = sessionFactory.getCurrentSession();
        session.save(applicationWorkFlow);
    }

    public String getStatus(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        return session.get(ApplicationWorkFlow.class,employeeId).getStatus();
    }
}
