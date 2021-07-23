package com.example.w6d4q3.dao;


import com.example.w6d4q3.domain.AddressEntity;
import org.springframework.stereotype.Repository;

@Repository
public class addressDAO extends AbstractHibernateDAO{
    public addressDAO(){ setClazz(AddressEntity.class);}

    public void addAddress(AddressEntity address){save(address);}
}
