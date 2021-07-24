package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.FacilityReport;
import com.beaconfire.hrserver.domain.House;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class HouseDAO {
    @Autowired
    private SessionFactory sessionFactory;

    public House getHouseById(int id){
        Session session = sessionFactory.getCurrentSession();
        return session.get(House.class, id);
    }

    public List<FacilityReport> getFacilityReportByHouse(House house){
        Session session = sessionFactory.getCurrentSession();
        int houseId = house.getId();
        String statement = "from FacilityReport where houseId = :houseId order by reportDate desc";
        Query query = session.createQuery(statement);
        query.setParameter("houseId", houseId);
        List<FacilityReport> reports = query.getResultList();
        return reports;
    }

    public List<House> getAllHouse(){
        Session session = sessionFactory.getCurrentSession();
        String statement = "from House";
        Query query = session.createQuery(statement);
        List<House> houses = query.getResultList();
        return houses;
    }
}
