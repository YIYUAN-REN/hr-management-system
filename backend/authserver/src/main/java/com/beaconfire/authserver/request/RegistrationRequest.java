package com.beaconfire.authserver.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegistrationRequest {
    private String userName;
    private String email;
    private String password;
    private String confirmPassword;
    private String registrationToken;
}
