package com.beaconfire.hrserver.controller;

import com.amazonaws.services.opsworks.model.App;
import com.beaconfire.hrserver.domain.*;
import com.beaconfire.hrserver.request.HrApproveRequest;
import com.beaconfire.hrserver.request.NewHouseRequest;
import com.beaconfire.hrserver.response.AllHouseResponse;
import com.beaconfire.hrserver.response.VisaMainResponse;
import com.beaconfire.hrserver.service.S3Services;
import com.beaconfire.hrserver.service.VisaService;
//import jdk.nashorn.internal.ir.IdentNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/hr")
public class HrVisaController {
    @Autowired
    private VisaService visaService;

    @Autowired
    S3Services s3Services;

    @GetMapping("/visa")
    public VisaMainResponse getData(){
        VisaMainResponse response = new VisaMainResponse();

        List<Employee> employees = visaService.getAllEmployee();
        List<PersonalDocument> docs = visaService.getAllDoc();
        response.setEmployees(employees);

        List<String> workauth = new ArrayList<>();
        for (int i=0;i<employees.size();i++){
            int employeeId = employees.get(i).getId();
            System.out.println(employeeId);
            String tmp = visaService.getVisaTypeByEmployeeId(employeeId);
            System.out.println(tmp);
            workauth.add(tmp);
        }
        response.setWorkAuth(workauth);

        List<Integer> days = new ArrayList<>();
        for (int i=0; i<employees.size();i++){
            Employee curr = employees.get(i);
            String expDate = curr.getEndDate();
            LocalDate todayDate = LocalDate.now();

            System.out.println(expDate);
            if (expDate==null || expDate.equals("tbd")){
                days.add(null);
                continue;
            }
            LocalDate visaEndDate = LocalDate.parse(expDate, DateTimeFormatter.ISO_LOCAL_DATE);
            Duration diff = Duration.between(todayDate.atStartOfDay(), visaEndDate.atStartOfDay());
            Integer diffDays = Math.toIntExact(diff.toDays());
            days.add(diffDays);
        }
        response.setDays(days);



        Map<Integer,List<String>> files = new HashMap<>();
        for (int i=0;i<docs.size();i++){

            int employeeId = docs.get(i).getEmployeeId();
            String singleFile = docs.get(i).getTitle();

            if (files.containsKey(employeeId)){
                List<String> tmp = files.get(employeeId);
                tmp.add(singleFile);
                files.put(employeeId,tmp);
            }else {
                List<String> tmp = new ArrayList<>();
                tmp.add(singleFile);
                files.put(employeeId,tmp);
            }
        }


        List<List<String>> files1 = new ArrayList<>();
        for (int i=0;i<employees.size();i++){
            Employee curr = employees.get(i);
            int employeeId = curr.getId();
            if (files.containsKey(employeeId)){
                files1.add(files.get(employeeId));
            }else {
                files1.add(null);
            }
        }
        response.setFiles(files1);

        List<String> status = new ArrayList<>();
        for (int i=0;i<employees.size();i++){
            int employeeId = employees.get(i).getId();
            String tmp = visaService.getStatus(employeeId);
            status.add(tmp);
        }
        response.setStatus(status);

        return response;

    }

    @PostMapping("/approve")
    public void hrApprove(@RequestBody HrApproveRequest request){
        int userId = request.getUserId();
        int employeeId = visaService.getEmployeeIdByUserId(userId);
        ApplicationWorkFlow applicationWorkFlow = visaService.getWorkflowByEmployeeId(employeeId);
        applicationWorkFlow.setStatus("nonewi20");
        visaService.updateStatusWorkflow(applicationWorkFlow);

        VisaStatus visaStatus = visaService.getVisaByEmployeeId(employeeId);
        visaStatus.setVisaType("I-20");
        visaService.updateVisaType(visaStatus);
        return;
    }

}
