package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.EmployeeDAO;
import com.beaconfire.hrserver.dao.FacilityDAO;
import com.beaconfire.hrserver.dao.HouseDAO;
import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.House;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class FacilityService {
    @Autowired
    private EmployeeDAO employeeDAO;

    @Autowired
    private HouseDAO houseDAO;

    @Autowired
    private FacilityDAO facilityDAO;

    @Transactional
    public Integer postFacilityReport(int id, String title, int employeeId, String description){
        House house = houseDAO.getHouseById(id);
        Employee employee = employeeDAO.getEmployeeById(employeeId);
        String time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        Integer facilityReportId = facilityDAO.postFacilityReport(house, title, employee, time, description, "Open");
        return facilityReportId;
    }
}
