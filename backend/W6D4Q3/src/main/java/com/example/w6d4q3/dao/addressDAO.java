package com.example.w6d4q3.dao;


import com.example.w6d4q3.domain.Address;
import org.springframework.stereotype.Repository;

@Repository
public class addressDAO extends AbstractHibernateDAO{
    public addressDAO(){ setClazz(Address.class);}

    public void addAddress(Address address){save(address);}
}
