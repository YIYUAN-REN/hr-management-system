package com.beaconfire.authserver.service;

import com.beaconfire.authserver.dao.RoleDAO;
import com.beaconfire.authserver.dao.UserDAO;
import com.beaconfire.authserver.dao.UserRoleDAO;
import com.beaconfire.authserver.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserDAO userDAO;

    @Transactional
    public boolean isUser(String userName, String email, String password){
        if (userDAO.getUserByUserName(userName, password) != null || userDAO.getUserByEmail(email, password) != null) {
            return true;
        }
        return false;
    }

    @Transactional
    public User getUserByUserName(String userName, String password) {
        User user = userDAO.getUserByUserName(userName, password);
        return user == null ? null : user;
    }

    @Transactional
    public User getUserByEmail(String email, String password) {
        User user = userDAO.getUserByEmail(email, password);
        return user == null ? null : user;
    }

    @Transactional
    public boolean isUserExist(String username){
        User user = userDAO.getUserOnlyByUserName(username);
        return user != null;
    }

    @Transactional
    public Integer addUser(String username, String email, String password){
        String time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        Integer userId = userDAO.addUser(username, email, password, time);
        return userId;
    }

}
