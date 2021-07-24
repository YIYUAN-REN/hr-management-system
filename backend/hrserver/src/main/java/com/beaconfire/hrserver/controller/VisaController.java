package com.beaconfire.hrserver.controller;

import com.beaconfire.hrserver.domain.Employee;
import com.beaconfire.hrserver.domain.Visa;
import com.beaconfire.hrserver.response.VisaMessageResponse;
import com.beaconfire.hrserver.response.VisaStartResponse;
import com.beaconfire.hrserver.service.VisaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("hr/visa/")
public class VisaController {
    @Autowired
    private VisaService visaService;


    @GetMapping("main")
    public VisaStartResponse visaMainPage(){
        //Should be able to get employeeID somewhere
        //hard code employeeId;
        int employeeId = 1;
        Visa visa = visaService.getVisaByEmployeeId(employeeId);
        visaService.preProcessVisa(visa);
//        String visaType = visa.getVisaType();

        //hardcode for now
        String visaType = "OPT Receipt";
        String status = visaService.getStatus(employeeId);

        VisaStartResponse response = new VisaStartResponse();
        response.setVisaType(visaType);
        response.setStatus(status);
        return response;

    }

    @GetMapping("optreceipt")
    public VisaMessageResponse optreceipt(){
        VisaMessageResponse response = new VisaMessageResponse();
        String message = "Please upload a copy of your OPT EAD.";
        response.setMessage(message);
        return response;

    }

    @GetMapping("optead")
    public String optead(){
        return "hello world";
    }

    @GetMapping("i983template")
    public String i983template(){
        return "hello world";
    }

    @GetMapping("waitforhr")
    public String waitforhr(){
        return "hello world";
    }

    @GetMapping("i20")
    public String i20(){
        return "hello world";
    }

    @GetMapping("uploadStemReceipt")
    public String uploadStemReceipt(){
        return "hello world";
    }

    @GetMapping("optstemreceipt")
    public String optstemreceipt(){
        return "hello world";
    }

    @GetMapping("optstemead")
    public String optstemead(){
        return "hello world";
    }

}
