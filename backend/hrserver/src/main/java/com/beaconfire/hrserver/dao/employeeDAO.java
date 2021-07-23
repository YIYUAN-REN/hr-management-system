package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.Employee;
import org.springframework.stereotype.Repository;

@Repository
public class employeeDAO extends AbstractHibernateDAO{
    public employeeDAO(){ setClazz(Employee.class);}

    public int addEmployee(Employee employee){ return save(employee);}
}
