package com.beaconfire.authserver.service;

import com.beaconfire.authserver.dao.RoleDAO;
import com.beaconfire.authserver.dao.UserRoleDAO;
import com.beaconfire.authserver.domain.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleService {
    @Autowired
    RoleDAO roleDAO;

    @Autowired
    UserRoleDAO userRoleDAO;

    @Transactional
    public Role getRoleByUserId(int userId) {
        int roleId = userRoleDAO.getRoleIdByUserId(userId);
        Role role = roleDAO.getRoleById(roleId);
        return role;
    }
}
