package com.beaconfire.authserver.dao;

import com.beaconfire.authserver.domain.Role;
import com.beaconfire.authserver.domain.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class RoleDAO {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public Role getRoleById(Integer id){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from Role where id = :id";
        Query query = session.createQuery(statement);
        query.setParameter("id", id);
        List<Role> list = query.getResultList();
        return list.isEmpty() ? null : list.get(0);
    }
}
