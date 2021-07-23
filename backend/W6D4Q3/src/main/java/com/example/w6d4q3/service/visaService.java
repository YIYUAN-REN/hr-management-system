package com.example.w6d4q3.service;

import com.example.w6d4q3.dao.visaDAO;
import com.example.w6d4q3.domain.VisaStatusEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class visaService {
    private visaDAO visaDAO;
    @Autowired
    public void setVisaDAO(visaDAO visaDAO){this.visaDAO = visaDAO;}

    public void addVisa(VisaStatusEntity visaStatusEntity){this.visaDAO.addVisa(visaStatusEntity);}
}
