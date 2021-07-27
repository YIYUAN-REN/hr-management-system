package com.beaconfire.authserver.service;

import com.beaconfire.authserver.dao.EmployeeDAO;
import com.beaconfire.authserver.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeDAO employeeDAO;

    @Transactional
    public Employee getEmployeeByUserId(Integer id){
        Employee employee = employeeDAO.getEmployeeByUserId(id);
        return employee;
    }

}
