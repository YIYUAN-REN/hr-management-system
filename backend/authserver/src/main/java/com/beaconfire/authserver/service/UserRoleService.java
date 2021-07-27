package com.beaconfire.authserver.service;

import com.beaconfire.authserver.dao.UserDAO;
import com.beaconfire.authserver.dao.UserRoleDAO;
import com.beaconfire.authserver.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class UserRoleService {
    @Autowired
    UserRoleDAO userRoleDAO;

    @Transactional
    public void addUserRole(Integer userId){
        String time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        userRoleDAO.addUserRole(userId, 2, time);
    }

}
