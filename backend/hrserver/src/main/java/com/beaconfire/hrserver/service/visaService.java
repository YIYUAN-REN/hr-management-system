package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.visaDAO;
import com.beaconfire.hrserver.domain.VisaStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class visaService {
    private visaDAO visaDAO;
    @Autowired
    public void setVisaDAO(visaDAO visaDAO){this.visaDAO = visaDAO;}

    public void addVisa(VisaStatus visaStatus){this.visaDAO.addVisa(visaStatus);}
}
