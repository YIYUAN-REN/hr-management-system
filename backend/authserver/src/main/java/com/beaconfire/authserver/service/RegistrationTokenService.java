package com.beaconfire.authserver.service;

import com.beaconfire.authserver.dao.RegistrationTokenDAO;
import com.beaconfire.authserver.domain.RegistrationToken;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class RegistrationTokenService {
    @Autowired
    RegistrationTokenDAO registrationTokenDAO;

    @Transactional
    public boolean isTokenExist(String token){
        List<RegistrationToken> tokens = registrationTokenDAO.getToken(token);
        return !tokens.isEmpty();
    }

    @Transactional
    public boolean isTokenExpired(String token){
        Date currentTime = new Date();
        Date givenTime = null;
        try {
            givenTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(registrationTokenDAO.getTokenDuration(token));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return givenTime.before(currentTime);
    }

    @Transactional
    public String getEmailWithToken(String token){
        String email = registrationTokenDAO.getEmail(token);
        return email;
    }

    
}
