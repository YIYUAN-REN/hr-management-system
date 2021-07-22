package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.EmployeeDAO;
import com.beaconfire.hrserver.dao.HouseDAO;
import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.House;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDAO employeeDAO;


    @Transactional
    public Employee getEmployeesById(Integer id){
        Employee employee = employeeDAO.getEmployeeById(id);
        return employee;
    }

}
