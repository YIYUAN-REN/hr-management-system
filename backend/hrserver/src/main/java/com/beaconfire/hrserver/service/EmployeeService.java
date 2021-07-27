package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.EmployeeDAO;
import com.beaconfire.hrserver.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeService {
    private EmployeeDAO employeeDAO;

    @Autowired
    public void setEmployeeDao(EmployeeDAO employeeDAO){this.employeeDAO = employeeDAO;}

    public int addEmployee(Employee employeeToAdd){return employeeDAO.addEmployee(employeeToAdd);}

    @Transactional
    public void updateEmployee(Employee employee){this.employeeDAO.updateEmployee(employee);}

    @Transactional
    public Employee getEmployeesById(Integer id){
        Employee employee = employeeDAO.getEmployeeById(id);
        return employee;
    }
    @Transactional
    public List<Employee> getEmployeeByUid(Integer uid){return employeeDAO.getEmployeeByUid(uid);}
    @Transactional
    public void deleteEmployeeByUid(Integer uid){this.employeeDAO.deleteEmployeeByUid(uid);}

}
