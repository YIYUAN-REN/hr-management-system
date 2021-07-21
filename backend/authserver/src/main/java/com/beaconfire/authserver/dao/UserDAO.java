package com.beaconfire.authserver.dao;

import com.beaconfire.authserver.domain.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class UserDAO {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public User getUserByUserName(String userName, String password){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from User where userName = :userName and password = :password";
        Query query = session.createQuery(statement);
        query.setParameter("userName", userName);
        query.setParameter("password", password);
        List<User> list = query.getResultList();
        return list.isEmpty() ? null : list.get(0);
    }

    public User getUserByEmail(String email, String password){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from User where email = :email and password = :password";
        Query query = session.createQuery(statement);
        query.setParameter("email", email);
        query.setParameter("password", password);
        List<User> list = query.getResultList();
        return list.isEmpty() ? null : list.get(0);
    }



}
