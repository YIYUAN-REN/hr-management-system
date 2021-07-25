package com.beaconfire.hrserver.dao;


import com.beaconfire.hrserver.domain.Address;
import com.beaconfire.hrserver.domain.ApplicationWorkFlow;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class AddressDAO extends AbstractHibernateDAO{
    public AddressDAO(){ setClazz(Address.class);}

    public void addAddress(Address address){save(address);}

    public Address getAddressByEmployeeId(int id){
        Session session = getCurrentSession();
        String get = "from Address addr where addr.employeeId=:id";
        Query query = session.createQuery(get);
        query.setParameter("id", id);
        List<Address> results = query.getResultList();
        if (results.size()>0) return results.get(0);
        else return null;
    }
}
