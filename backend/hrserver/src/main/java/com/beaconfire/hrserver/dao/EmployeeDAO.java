package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.House;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class EmployeeDAO {
    @Autowired
    private SessionFactory sessionFactory;

    public Employee getEmployeeById(Integer id){
        Session session = sessionFactory.getCurrentSession();
        return session.get(Employee.class, id);
    }

    public List<Employee> getEmployeesByHouse(House house){
        int houseId = house.getId();
        Session session = sessionFactory.getCurrentSession();
        String statement = "from Employee where houseId = :houseId";
        Query query = session.createQuery(statement);
        query.setParameter("houseId", houseId);
        List<Employee> employees = query.getResultList();
        return employees.isEmpty() ? null : employees;
    }
}
