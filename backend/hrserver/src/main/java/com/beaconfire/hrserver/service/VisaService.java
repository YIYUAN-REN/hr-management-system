package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.VisaDAO;
import com.beaconfire.hrserver.domain.*;
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
        return this.visaDAO.getVisaByEmployeeId(employeeId);
    }
    @Transactional
    public void deleteVisaByEmployeeId(int id){this.visaDAO.deleteVisaByEmployeeId(id);}
    @Transactional
    public String getVisaTypeByEmployeeId(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        return visaDAO.getVisaType(employeeId);
    }

    @Transactional
    public void updateVisaType(VisaStatus visaStatus){
        Session session = sessionFactory.getCurrentSession();
        session.update(visaStatus);
    }

    @Transactional
    public ApplicationWorkFlow getWorkflowByEmployeeId(int employeeId){
        Session session = sessionFactory.getCurrentSession();
        return visaDAO.getWorkflowByEmployeeId(employeeId);
    }

    @Transactional
    public void updateStatusWorkflow(ApplicationWorkFlow applicationWorkFlow){
        Session session = sessionFactory.getCurrentSession();
        session.update(applicationWorkFlow);
    }

    //config employee visa type,user visaType, Today's date, user visaEndDate
    @Transactional
    public void preProcessVisa(VisaStatus visaStatus){
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
        if (!isIn){
            String todayDateS = todayDate.toString();
            visaDAO.insertNewWorkFlow(employeeId,todayDateS,todayDateS);
        }
    }

    @Transactional
    public void insertPersonalDoc(int employeeId, String fileName){
        LocalDate todayDate = LocalDate.now();
        String todayDateS = todayDate.toString();
        visaDAO.insertNewPersonalDoc(employeeId,todayDateS,fileName);
    }

    @Transactional
    public String getStatus(int employeeId){
        String status = visaDAO.getStatus(employeeId);
        return status;
    }

    @Transactional
    public int getEmployeeIdByUserId(int userId){
        int employeeId = visaDAO.getEmployeeIdByUserId(userId);
        return employeeId;
    }

    @Transactional
    public List<Employee> getAllEmployee(){
        List<Employee> employees = visaDAO.getAllEmployee();
        return employees;
    }

    @Transactional
    public List<PersonalDocument> getAllDoc(){
        List<PersonalDocument> docs = visaDAO.getAllDoc();
        return docs;
    }

}
