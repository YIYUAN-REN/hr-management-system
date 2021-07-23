package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.employeeDAO;
import com.beaconfire.hrserver.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class employeeService {
    private employeeDAO employeedao;

    @Autowired
    public void setEmployeeDao(employeeDAO employeedao){this.employeedao = employeedao;}

    public int addEmployee(Employee employeeToAdd){return employeedao.addEmployee(employeeToAdd);}
}
