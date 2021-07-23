package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.EmployeeDAO;
import com.beaconfire.hrserver.dao.HouseDAO;
import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.FacilityReport;
import com.beaconfire.hrserver.domain.House;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class HouseService {
    @Autowired
    private EmployeeDAO employeeDAO;

    @Autowired
    private HouseDAO houseDAO;

    @Transactional
    public House getHouseByEmployeeId(int employeeId){
        Employee employee = employeeDAO.getEmployeeById(employeeId);
        House house = houseDAO.getHouseById(employee.getHouseId());
        return house;
    }

    @Transactional
    public List<Employee> getEmployeesByHouse(House house){
        List<Employee> employees = employeeDAO.getEmployeesByHouse(house);
        return employees;
    }

    @Transactional
    public List<FacilityReport> getFacilityReportByHouse(House house){
        List<FacilityReport> reports = houseDAO.getFacilityReportByHouse(house);
        return reports;
    }
}
