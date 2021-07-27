package com.beaconfire.authserver.dao;

import com.beaconfire.authserver.domain.RegistrationToken;
import com.beaconfire.authserver.domain.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class RegistrationTokenDAO {
    @Autowired
    private SessionFactory sessionFactory;

    public List<RegistrationToken> getToken(String token) {
        Session session = sessionFactory.getCurrentSession();
        String statement = "from RegistrationToken where token = :token";
        Query query = session.createQuery(statement);
        query.setParameter("token", token);
        List<RegistrationToken> list = query.getResultList();
        return list;
    }

    public String getTokenDuration(String token){
        Session session = sessionFactory.getCurrentSession();
        String statement = "select validDuration from RegistrationToken where token = :token";
        Query query = session.createQuery(statement);
        query.setParameter("token", token);
        String time = (String)query.getResultList().get(0);
        return time;
    }

    public String getEmail(String token){
        Session session = sessionFactory.getCurrentSession();
        String statement = "select email from RegistrationToken where token = :token";
        Query query = session.createQuery(statement);
        query.setParameter("token", token);
        String email = query.getResultList().isEmpty() ? null : (String)query.getResultList().get(0);
        return email;
    }
}
