package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.EmployeeDAO;
import com.beaconfire.hrserver.dao.FacilityDAO;
import com.beaconfire.hrserver.dao.HouseDAO;
import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.FacilityReport;
import com.beaconfire.hrserver.domain.FacilityReportDetail;
import com.beaconfire.hrserver.domain.House;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

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

    @Transactional
    public FacilityReport getFacilityReportById(int id){
        FacilityReport report = facilityDAO.getFacilityReportById(id);
        return report;
    }

    @Transactional
    public List<FacilityReportDetail> getFacilityReportDetailByFacilityReportId(int id){
        List<FacilityReportDetail> reportDetails = facilityDAO.getFacilityReportDetailByReport(getFacilityReportById(id));
        return reportDetails;
    }

    @Transactional
    public Integer postComment(int reportId, int employeeId, String comment){
        String time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        Integer detailId = facilityDAO.postComment(reportId, employeeId, comment, time, time);
        return detailId;
    }

    @Transactional
    public void updateComment(int detailId, String comment){
        String time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        facilityDAO.updateComment(detailId, comment, time);
    }
}
