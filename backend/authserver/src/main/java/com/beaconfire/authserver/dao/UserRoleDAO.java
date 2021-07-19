package com.beaconfire.authserver.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;

@Repository
public class UserRoleDAO {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public int getRoleIdByUserId(int userId){
        Session session = sessionFactory.getCurrentSession();
        String statement = "select roleId from UserRole where userId = :userId";
        Query query = session.createQuery(statement);
        query.setParameter("userId", userId);
        return (int)query.getResultList().get(0);
    }
}
