package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.ApplicationWorkFlow;
import com.beaconfire.hrserver.domain.Address;
import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.PersonalDocument;
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
        String statement = "from VisaStatus where employeeId = :employeeId";
        Query query = session.createQuery(statement);
        query.setParameter("employeeId", employeeId);
        List<VisaStatus> list = query.getResultList();
        if (list.size()>0) return list.get(0);
        else return null;

    }

    public void updateVisaType(VisaStatus visaStatus){
        Session session = sessionFactory.getCurrentSession();
        session.update(visaStatus);
    }

    public boolean isInSystem(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from ApplicationWorkFlow where employeeId = :employeeId";
        Query query = session.createQuery(statement);
        query.setParameter("employeeId", employeeId);
        List<VisaStatus> list = query.getResultList();

        if (list.isEmpty()){
            return false;
        }
        return true;
    }

    public String getStatus(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from ApplicationWorkFlow where employeeId = :employeeId";
        Query query = session.createQuery(statement);
        query.setParameter("employeeId", employeeId);
        List<ApplicationWorkFlow> list = query.getResultList();
        return list.get(0).getStatus();
    }

    public ApplicationWorkFlow getWorkflowByEmployeeId(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from ApplicationWorkFlow where employeeId = :employeeId";
        Query query = session.createQuery(statement);
        query.setParameter("employeeId", employeeId);
        List<ApplicationWorkFlow> list = query.getResultList();
        return list.get(0);
    }

    public void updateStatusWorkflow(ApplicationWorkFlow applicationWorkFlow){
        Session session = sessionFactory.getCurrentSession();
        session.update(applicationWorkFlow);
    }

    public void insertNewWorkFlow(int employeeId, String createDate,String modificationDate){
        ApplicationWorkFlow applicationWorkFlow = new ApplicationWorkFlow();
        applicationWorkFlow.setEmployeeId(employeeId);
        applicationWorkFlow.setCreateDate(createDate);
        applicationWorkFlow.setModificationDate(modificationDate);
        applicationWorkFlow.setStatus("nosubmission");
//        applicationWorkFlow.setStatus("nonewi20");
        Session session = sessionFactory.getCurrentSession();
        session.save(applicationWorkFlow);
    }

    public void insertNewPersonalDoc(int employeeId, String createDate, String title){
        PersonalDocument personalDocument = new PersonalDocument();
        personalDocument.setEmployeeId(employeeId);
        personalDocument.setCreateDate(createDate);
        personalDocument.setTitle(title);
        Session session = sessionFactory.getCurrentSession();
        session.save(personalDocument);
    }

    public String getVisaType(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from VisaStatus where employeeId = :employeeId";
        Query query = session.createQuery(statement);
        query.setParameter("employeeId", employeeId);
        List<VisaStatus> list = query.getResultList();
        if(list.isEmpty()){
            return null;
        }
        return list.get(0).getVisaType();
    }

    public void deleteVisaByEmployeeId(int id){
        Session session = getCurrentSession();
        String del = "delete VisaStatus  where employeeId=:id";
        Query query = session.createQuery(del);
        query.setParameter("id",id);
        query.executeUpdate();
    }

    public int getEmployeeIdByUserId(int userId){
        Session session = sessionFactory.getCurrentSession();
        return session.get(ApplicationWorkFlow.class,userId).getEmployeeId();
    }

    public List<Employee> getAllEmployee(){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from Employee";
        Query query = session.createQuery(statement);
        List<Employee> employees = query.getResultList();
        return employees;
    }

    public List<PersonalDocument> getAllDoc(){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from PersonalDocument";
        Query query = session.createQuery(statement);
        List<PersonalDocument> docs = query.getResultList();
        return docs;
    }
}
