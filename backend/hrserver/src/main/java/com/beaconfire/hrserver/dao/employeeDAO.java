package com.example.w6d4q3.dao;

import com.example.w6d4q3.domain.Employee;
import org.springframework.stereotype.Repository;

@Repository
public class employeeDAO extends AbstractHibernateDAO{
    public employeeDAO(){ setClazz(Employee.class);}

    public int addEmployee(Employee employee){ return save(employee);}
}
