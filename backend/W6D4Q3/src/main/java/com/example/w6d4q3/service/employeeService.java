package com.example.w6d4q3.service;

import com.example.w6d4q3.dao.employeeDAO;
import com.example.w6d4q3.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class employeeService {
    private employeeDAO employeedao;
    @Autowired
    public void setEmployeeDao(employeeDAO employeedao){this.employeedao = employeedao;}

    public int addEmployee(Employee employeeToAdd){return employeedao.addEmployee(employeeToAdd);}
}
