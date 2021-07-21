package com.beaconfire.authserver.dao;

import com.beaconfire.authserver.domain.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class UserRoleDAO {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public Integer getRoleIdByUserId(int userId){
        Session session = sessionFactory.getCurrentSession();
        String statement = "select roleId from UserRole where userId = :userId";
        Query query = session.createQuery(statement);
        query.setParameter("userId", userId);
        List<Integer> list = query.getResultList();
        return list.isEmpty() ? null : list.get(0);
    }
}
