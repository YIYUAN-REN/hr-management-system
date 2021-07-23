package com.beaconfire.hrserver.dao;


import com.beaconfire.hrserver.domain.Address;
import org.springframework.stereotype.Repository;

@Repository
public class addressDAO extends AbstractHibernateDAO{
    public addressDAO(){ setClazz(Address.class);}

    public void addAddress(Address address){save(address);}
}
