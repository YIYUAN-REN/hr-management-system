package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.FacilityReport;
import com.beaconfire.hrserver.domain.FacilityReportDetail;
import com.beaconfire.hrserver.domain.House;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class FacilityDAO {
    @Autowired
    private SessionFactory sessionFactory;

    public Integer postFacilityReport(House house, String title, Employee employee, String reportDate, String description, String status) {
        Session session = sessionFactory.getCurrentSession();
        FacilityReport facilityReport = new FacilityReport();
        facilityReport.setTitle(title);
        facilityReport.setEmployeeId(employee.getId());
        facilityReport.setReportDate(reportDate);
        facilityReport.setDescription(description);
        facilityReport.setStatus(status);
        facilityReport.setHouseId(house.getId());
        Integer facilityReportId = (Integer) session.save(facilityReport);
        return facilityReportId;
    }

    public FacilityReport getFacilityReportById(int id){
        Session session = sessionFactory.getCurrentSession();
        FacilityReport report = session.get(FacilityReport.class, id);
        return report;
    }

    public List<FacilityReportDetail> getFacilityReportDetailByReport(FacilityReport report) {
        Session session = sessionFactory.getCurrentSession();
        int reportId = report.getId();
        String statement = "from FacilityReportDetail where reportId = :reportId";
        Query query = session.createQuery(statement);
        query.setParameter("reportId", reportId);
        List<FacilityReportDetail> reportDetails = query.getResultList();
        return reportDetails;
    }

    public Integer postComment(int reportId, int employeeId, String comment, String createDate, String lastModificationDate) {
        Session session = sessionFactory.getCurrentSession();
        FacilityReportDetail detail = new FacilityReportDetail();
        detail.setReportId(reportId);
        detail.setEmployeeId(employeeId);
        detail.setComments(comment);
        detail.setCreateDate(createDate);
        detail.setLastModificationDate(lastModificationDate);
        Integer detailId = (Integer) session.save(detail);
        return detailId;
    }

    public void updateComment(int detailId, String comment, String lastModificationDate){
        Session session = sessionFactory.getCurrentSession();
        FacilityReportDetail facilityReportDetail = session.get(FacilityReportDetail.class, detailId);
        facilityReportDetail.setComments(comment);
        facilityReportDetail.setLastModificationDate(lastModificationDate);
    }
}
