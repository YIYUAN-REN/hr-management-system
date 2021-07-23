package com.example.w6d4q3.dao;

import com.example.w6d4q3.domain.AddressEntity;
import com.example.w6d4q3.domain.VisaStatusEntity;
import org.springframework.stereotype.Repository;

@Repository
public class visaDAO extends AbstractHibernateDAO{
    public visaDAO(){setClazz(AddressEntity.class);}

    public void addVisa(VisaStatusEntity visaToAdd){save(visaToAdd);}
}
