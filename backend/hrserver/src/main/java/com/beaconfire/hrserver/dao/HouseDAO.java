package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.Contact;
import com.beaconfire.hrserver.domain.Facility;
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

    public Integer addHouse(int contactId, String address, int numberOfPerson){
        Session session = sessionFactory.getCurrentSession();
        House house = new House();
        house.setContactId(contactId);
        house.setAddress(address);
        house.setNumberOfPerson(numberOfPerson);
        Integer houseId = (Integer)session.save(house);
        return houseId;
    }

    public List<Facility> getFacilitiesByHouse(House house){
        Session session = sessionFactory.getCurrentSession();
        int houseId = house.getId();
        String statement = "from Facility where houseId = :houseId";
        Query query = session.createQuery(statement);
        query.setParameter("houseId", houseId);
        List<Facility> list = query.getResultList();
        return list;
    }

    public int getContactIdByHouseId(int id){
        Session session = sessionFactory.getCurrentSession();
        String statement = "select contactId from House where id = :id";
        Query query = session.createQuery(statement);
        query.setParameter("id", id);
        List<Integer> list = query.getResultList();
        return list.get(0);
    }

}
