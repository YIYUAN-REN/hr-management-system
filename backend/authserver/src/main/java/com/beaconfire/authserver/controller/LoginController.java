package com.beaconfire.authserver.controller;

import com.beaconfire.authserver.constant.Constant;
import com.beaconfire.authserver.domain.User;
import com.beaconfire.authserver.request.LoginRequest;
import com.beaconfire.authserver.response.LoginResponse;
import com.beaconfire.authserver.security.CookieUtil;
import com.beaconfire.authserver.security.JwtUtil;
import com.beaconfire.authserver.service.RoleService;
import com.beaconfire.authserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
public class LoginController {
    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

    @GetMapping("/login")
    public LoginResponse login() {
        LoginResponse response = new LoginResponse();
        return response;
    }

    @PostMapping(value="/login", consumes={MediaType.APPLICATION_JSON_VALUE})
    public LoginResponse login(HttpServletResponse httpServletResponse, @RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        String userName = request.getUserName();
        String email = request.getEmail();
        String password = request.getPassword();

        // if not valid user, go back to login page
        if (!userService.isUser(userName, email, password)){
            response.setMessage("invalid credential");
            return response;
        }

        User userByUserName = userService.getUserByUserName(userName, password);
        User userByEmail = userService.getUserByEmail(email, password);
        User user = userByUserName == null ? userByEmail : userByUserName;
        String token = JwtUtil.generateToken(Constant.SIGNING_KEY, userByUserName == null ? email : userName);
        CookieUtil.create(httpServletResponse, Constant.JWT_TOKEN_COOKIE_NAME, token, false, -1, "localhost");

        response.setMessage("success");
        response.setId(String.valueOf(user.getId()));
        response.setEmail(user.getEmail());
        response.setRole(String.valueOf(roleService.getRoleByUserId(user.getId())));
        response.setToken(token);

        return response;
    }
}
