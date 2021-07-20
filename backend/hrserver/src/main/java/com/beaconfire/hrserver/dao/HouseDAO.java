package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.House;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class HouseDAO {
    @Autowired
    private SessionFactory sessionFactory;

    public House getHouseById(int id){
        Session session = sessionFactory.getCurrentSession();
        return session.get(House.class, id);
    }
}
