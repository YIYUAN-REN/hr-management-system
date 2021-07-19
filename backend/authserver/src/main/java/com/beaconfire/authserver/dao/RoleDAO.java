package com.beaconfire.authserver.dao;

import com.beaconfire.authserver.domain.Role;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;

@Repository
public class RoleDAO {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public Role getRoleById(int id){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from Role where id = :id";
        Query query = session.createQuery(statement);
        query.setParameter("id", id);
        return (Role)query.getResultList().get(0);
    }
}
