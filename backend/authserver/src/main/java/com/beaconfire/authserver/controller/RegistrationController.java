package com.beaconfire.authserver.controller;

import com.beaconfire.authserver.request.RegistrationRequest;
import com.beaconfire.authserver.response.RegistrationResponse;
import com.beaconfire.authserver.service.RegistrationTokenService;
import com.beaconfire.authserver.service.UserRoleService;
import com.beaconfire.authserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class RegistrationController {
    @Autowired
    UserService userService;

    @Autowired
    UserRoleService userRoleService;

    @Autowired
    RegistrationTokenService registrationTokenService;

    @PostMapping(value="/registration")
    public RegistrationResponse register(@RequestBody RegistrationRequest request) {
        RegistrationResponse response = new RegistrationResponse();

        if (userService.isUserExist(request.getUserName())) {
            response.setMessage("User Exist!");
        } else if (!request.getPassword().equals(request.getConfirmPassword())) {
            System.out.println(request.getPassword() + " " + request.getConfirmPassword());
            response.setMessage("Password Not Match!");
        } else if (!request.getEmail().equals(registrationTokenService.getEmailWithToken(request.getRegistrationToken()))) {
            System.out.println(request.getEmail() + " " + registrationTokenService.getEmailWithToken(request.getRegistrationToken()));
            response.setMessage("Email and Token Not Match!");
        } else if (!registrationTokenService.isTokenExist(request.getRegistrationToken())) {
            response.setMessage("Registration Token Not Exist!");
        } else if (registrationTokenService.isTokenExpired(request.getRegistrationToken())) {
            response.setMessage("Registration Token Expire!");
        } else {
            Integer userId = userService.addUser(request.getUserName(), request.getEmail(), request.getPassword());
            userRoleService.addUserRole(userId);

            if (userId == null) {
                response.setMessage("Fail!");
            } else {
                response.setMessage("Success!");
                response.setId(userId);
            }
        }

        return response;
    }
}
