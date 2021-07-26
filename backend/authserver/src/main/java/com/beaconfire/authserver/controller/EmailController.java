package com.beaconfire.authserver.controller;

import com.beaconfire.authserver.request.EmailRequest;
import com.beaconfire.authserver.response.EmailResponse;
import com.beaconfire.authserver.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class EmailController {
    @Autowired
    EmailService emailService;

    @PostMapping(value = "/email")
    public EmailResponse sendEmail(@RequestBody EmailRequest request){
        EmailResponse response = new EmailResponse();
        emailService.sendEmail(request.getEmail());
        response.setMessage("Success!");
        return response;
    }
}
