package com.beaconfire.hrserver.dao;


import com.beaconfire.hrserver.domain.Address;
import org.springframework.stereotype.Repository;

@Repository
public class AddressDAO extends AbstractHibernateDAO{
    public AddressDAO(){ setClazz(Address.class);}

    public void addAddress(Address address){save(address);}
}
