package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.ContactDAO;
import com.beaconfire.hrserver.dao.EmployeeDAO;
import com.beaconfire.hrserver.dao.HouseDAO;
import com.beaconfire.hrserver.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class HouseService {
    @Autowired
    private EmployeeDAO employeeDAO;

    @Autowired
    private HouseDAO houseDAO;

    @Autowired
    private ContactDAO contactDAO;

    @Transactional
    public House getHouseByEmployeeId(int employeeId) {
        Employee employee = employeeDAO.getEmployeeById(employeeId);
        House house = houseDAO.getHouseById(employee.getHouseId());
        return house;
    }

    @Transactional
    public List<Employee> getEmployeesByHouse(House house) {
        List<Employee> employees = employeeDAO.getEmployeesByHouse(house);
        return employees;
    }

    @Transactional
    public List<FacilityReport> getFacilityReportByHouse(House house) {
        List<FacilityReport> reports = houseDAO.getFacilityReportByHouse(house);
        return reports;
    }

    @Transactional
    public List<House> getAllHouse() {
        return houseDAO.getAllHouse();
    }

    @Transactional
    public Integer addHouse(int contactId, String address, int numberOfPerson) {
        Integer houseId = houseDAO.addHouse(contactId, address, numberOfPerson);
        return houseId;
    }

    @Transactional
    public House getHouseById(int houseId) {
        return houseDAO.getHouseById(houseId);
    }

    @Transactional
    public List<Facility> getFacilitiesByHouse(House house) {
        return houseDAO.getFacilitiesByHouse(house);
    }

    @Transactional
    public List<Contact> getContactsByHouses(List<House> houses) {
        List<Contact> contacts = new ArrayList<>();
        for (House house : houses) {
            int contactId = houseDAO.getContactIdByHouseId(house.getId());
            Contact contact = contactDAO.getContactById(contactId);
            contacts.add(contact);
        }
        return contacts;
    }
}
