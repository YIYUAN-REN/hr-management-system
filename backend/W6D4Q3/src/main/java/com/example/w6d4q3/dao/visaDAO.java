package com.example.w6d4q3.dao;

import com.example.w6d4q3.domain.Address;
import com.example.w6d4q3.domain.VisaStatus;
import org.springframework.stereotype.Repository;

@Repository
public class visaDAO extends AbstractHibernateDAO{
    public visaDAO(){setClazz(Address.class);}

    public void addVisa(VisaStatus visaToAdd){save(visaToAdd);}
}
