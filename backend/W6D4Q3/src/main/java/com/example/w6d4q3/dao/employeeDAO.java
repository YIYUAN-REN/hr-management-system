package com.example.w6d4q3.dao;

import com.example.w6d4q3.domain.EmployeeEntity;
import org.springframework.stereotype.Repository;

@Repository
public class employeeDAO extends AbstractHibernateDAO{
    public employeeDAO(){ setClazz(EmployeeEntity.class);}

    public int addEmployee(EmployeeEntity employee){ return save(employee);}
}
