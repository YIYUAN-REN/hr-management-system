package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.VisaDAO;
import com.beaconfire.hrserver.domain.VisaStatus;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

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
        return session.get(VisaStatus.class,employeeId);
    }

    @Transactional
    public void updateVisaType(VisaStatus visa){
        Session session = sessionFactory.getCurrentSession();
        session.update(visa);
    }

    @Transactional
    public void preProcessVisa(VisaStatus visa){
        // config employee visa type
        // user visaType, Today's date, user visaEndDate,
        // I983Submitted, HrUploaded
        String visaType = visa.getVisaType();
        LocalDate todayDate = LocalDate.now();
        String visaEndDatetmp = visa.getVisaEndDate();
        LocalDate visaEndDate = LocalDate.parse(visaEndDatetmp, DateTimeFormatter.ISO_LOCAL_DATE);
        Duration diff = Duration.between(todayDate.atStartOfDay(), visaEndDate.atStartOfDay());
        long diffDays = diff.toDays();
        if (visaType.equals("OPT EAD")&& diffDays<100){
            visa.setVisaType("I-983");
            visaDAO.updateVisaType(visa);
        }
    }
}
