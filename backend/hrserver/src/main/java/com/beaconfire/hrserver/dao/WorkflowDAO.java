package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.ApplicationWorkFlow;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class WorkflowDAO extends AbstractHibernateDAO{
    public WorkflowDAO(){setClazz(ApplicationWorkFlow.class);}

    public void addWorkflow(ApplicationWorkFlow workFlow){
        Session session = getCurrentSession();
        session.saveOrUpdate(workFlow);
    }

    public List<ApplicationWorkFlow> getWorkflowByStatus(String state){
        Session session = getCurrentSession();
        String getPending = "from ApplicationWorkFlow flow where flow.status=:state";
        Query query = session.createQuery(getPending);
        query.setParameter("state", state);
        List<ApplicationWorkFlow> results = query.getResultList();
        return results;
    }

}
