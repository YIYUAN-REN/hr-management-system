package com.beaconfire.authserver.service;

import com.beaconfire.authserver.dao.RoleDAO;
import com.beaconfire.authserver.dao.UserDAO;
import com.beaconfire.authserver.dao.UserRoleDAO;
import com.beaconfire.authserver.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
public class UserService {
    @Autowired
    UserDAO userDAO;

    @Transactional
    public boolean isUser(String userName, String email, String password){
        if (userDAO.getUserByUserName(userName, password) != null && userDAO.getUserByEmail(email, password) != null) {
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
}
