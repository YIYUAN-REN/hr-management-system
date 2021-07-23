package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.VisaDAO;
import com.beaconfire.hrserver.domain.Visa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class VisaService {
    @Autowired
    private VisaDAO visaDAO;

    @Transactional
    public Visa getVisaByEmployeeId(int employeeId){
        Visa visa = visaDAO.getVisaByEmployeeId(employeeId);
        return visa;
    }

    @Transactional
    public void preProcessVisa(Visa visa){
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
