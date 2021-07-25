package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.EmployeeDAO;
import com.beaconfire.hrserver.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private EmployeeDAO employeedao;

    @Autowired
    public void setEmployeeDao(EmployeeDAO employeedao){this.employeedao = employeedao;}

    public int addEmployee(Employee employeeToAdd){return employeedao.addEmployee(employeeToAdd);}
}
