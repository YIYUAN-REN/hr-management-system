package com.beaconfire.hrserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication(exclude= HibernateJpaAutoConfiguration.class)
public class HrserverApplication {

    public static void main(String[] args) {
        SpringApplication.run(HrserverApplication.class, args);
    }

}
