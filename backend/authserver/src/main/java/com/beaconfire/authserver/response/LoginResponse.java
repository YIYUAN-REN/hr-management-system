package com.beaconfire.authserver.response;

import com.beaconfire.authserver.domain.Role;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private String message;
    private String id;
    private String userName;
    private String email;
    private Role role;
    private String token;
}
