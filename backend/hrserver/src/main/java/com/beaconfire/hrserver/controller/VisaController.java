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

    // This function is for redirecting based on employee visa status
    @GetMapping("/{wadawdabawda}")
    public void visaHomePage(HttpServletResponse response, @PathVariable String employeeId) throws IOException {
        Visa visa = visaService.getVisaByEmployeeId(Integer.parseInt(employeeId));
        visaService.preProcessVisa(visa);
        String visaType = visa.getVisaType();
        boolean I983Submitted = visa.getI983Submitted();
        boolean OptStemReceiptReceived = visa.getOptStemReceiptReceived();

        response.sendRedirect("/hr/visa/optreceipt");
//        if (visaType.equals("OPT Receipt")){
//            response.sendRedirect("/hr/visa/optreceipt");
//        }else if (visaType.equals("OPT EAD")){
//            response.sendRedirect("/hr/visa/optead");
//        }else if (visaType.equals("I-983") && !I983Submitted){
//            response.sendRedirect("/hr/visa/i983template");
//        }else if (visaType.equals("I-983") && I983Submitted){
//            response.sendRedirect("/hr/visa/waitforhr");
//        }else if (visaType.equals("I-20") && !OptStemReceiptReceived){
//            response.sendRedirect("/hr/visa/i20");
//        }else if (visaType.equals("I-20") && OptStemReceiptReceived){
//            response.sendRedirect("/hr/visa/uploadStemReceipt");
//        } else if (visaType.equals("OPT STEM Receipt")){
//            response.sendRedirect("/hr/visa/optstemreceipt");
//        }else if (visaType.equals("OPT STEM EAD")){
//            response.sendRedirect("/hr/visa/optstemead");
//        }
    }

    @GetMapping("main")
    public VisaStartResponse visaMainPage(){
        //hardcode for now
        String visaType = "OPT Receipt";
        boolean I983Submitted = false;
        boolean OptStemReceiptReceived = false;

        VisaStartResponse response = new VisaStartResponse();
        response.setVisaType(visaType);
        response.setI983Submitted(false);
        response.setOptStemReceiptReceived(true);

//        System.out.println("hello main response");
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
