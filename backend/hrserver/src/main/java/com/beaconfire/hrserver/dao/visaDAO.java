package com.beaconfire.hrserver.dao;

import com.beaconfire.hrserver.domain.VisaStatus;
import org.springframework.stereotype.Repository;

@Repository
public class visaDAO extends AbstractHibernateDAO{
    public visaDAO(){setClazz(VisaStatus.class);}

    public void addVisa(VisaStatus visaToAdd){save(visaToAdd);}
}
