package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.VisaDAO;
import com.beaconfire.hrserver.domain.FacilityReport;
import com.beaconfire.hrserver.domain.VisaStatus;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Query;
import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class VisaService {
    @Autowired
    private SessionFactory sessionFactory;

    private VisaDAO visaDAO;
    @Autowired
    public void setVisaDAO(VisaDAO visaDAO){this.visaDAO = visaDAO;}

    public void addVisa(VisaStatus visaStatus){this.visaDAO.addVisa(visaStatus);}

    @Transactional
    public VisaStatus getVisaByEmployeeId(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        return visaDAO.getVisaByEmployeeId(employeeId);
    }

    @Transactional
    public void updateVisaType(VisaStatus visaStatus){
        Session session = sessionFactory.getCurrentSession();
        session.update(visaStatus);
    }

    @Transactional
    public void preProcessVisa(VisaStatus visaStatus){
        // config employee visa type
        // user visaType, Today's date, user visaEndDate,
        String visaType = visaStatus.getVisaType();
        LocalDate todayDate = LocalDate.now();
        String visaEndDatetmp = visaStatus.getVisaEndDate();
        LocalDate visaEndDate = LocalDate.parse(visaEndDatetmp, DateTimeFormatter.ISO_LOCAL_DATE);
        Duration diff = Duration.between(todayDate.atStartOfDay(), visaEndDate.atStartOfDay());
        long diffDays = diff.toDays();
        if (visaType.equals("OPT EAD")&& diffDays<100){
            visaStatus.setVisaType("I-983");
            visaDAO.updateVisaType(visaStatus);
        }

        // add a new entity to table-workflow
        int employeeId = visaStatus.getEmployeeId();
        boolean isIn = visaDAO.isInSystem(employeeId);
//        System.out.println(isIn);
        if (!isIn){
            String todayDateS = todayDate.toString();
            visaDAO.insertNewWorkFlow(employeeId,todayDateS,todayDateS);
        }
    }

    @Transactional
    public String getStatus(int employeeId){
        String status = visaDAO.getStatus(employeeId);
        return status;
    }

}
