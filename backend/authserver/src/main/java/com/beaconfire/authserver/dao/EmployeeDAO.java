package com.beaconfire.authserver.dao;

import com.beaconfire.authserver.domain.Employee;
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

    public Employee getEmployeeByUserId (Integer userId) {
        Session session = sessionFactory.getCurrentSession();
        String statement = "from Employee where userId = :userId";
        Query query = session.createQuery(statement);
        query.setParameter("userId", userId);
        List<Employee> employees = query.getResultList();
        return employees.isEmpty() ? null : employees.get(0);
    }
}
