package com.beaconfire.authserver.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    private String userName;
    private String email;
    private String password;
}
