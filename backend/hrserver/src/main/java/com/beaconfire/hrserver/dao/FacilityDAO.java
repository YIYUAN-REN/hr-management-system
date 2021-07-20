package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.FacilityReport;
import com.beaconfire.hrserver.domain.House;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class FacilityDAO {
    @Autowired
    private SessionFactory sessionFactory;

    public Integer postFacilityReport(House house, String title, Employee employee, String reportDate, String description, String status){
        Session session = sessionFactory.getCurrentSession();
        FacilityReport facilityReport = new FacilityReport();
        facilityReport.setTitle(title);
        facilityReport.setEmployeeId(employee.getId());
        facilityReport.setReportDate(reportDate);
        facilityReport.setDescription(description);
        facilityReport.setStatus(status);
        facilityReport.setHouseId(house.getId());
        return (Integer) session.save(facilityReport);
    }
}
