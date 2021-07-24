package com.beaconfire.hrserver.config;

import com.beaconfire.hrserver.security.filter.JwtFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Collections;

// use annotation rather than XML to config filter
@Configuration
public class FilterConfig {

    // from application.properties
    @Value("${services.auth}")
    private String authService;

    @Bean
    public FilterRegistrationBean<JwtFilter> jwtFilter(){
        final FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new JwtFilter());
        // set parameter named "services.auth" with value "http://localhost:4200/login"
        registrationBean.setInitParameters(Collections.singletonMap("services.auth", authService));
        // add filter in which endpoint
        registrationBean.addUrlPatterns("/hrs/*");//fake
        return registrationBean;
    }

//    @Bean
//    public FilterRegistrationBean<RequestFilter> requestFilter(){
//        final FilterRegistrationBean<RequestFilter> registrationBean = new FilterRegistrationBean<>();
//        registrationBean.setFilter(new RequestFilter());
//        // set parameter named "services.auth" with value "http://localhost:4200/login"
//        registrationBean.setInitParameters(Collections.singletonMap("services.auth", authService));
//        // add filter in which endpoint
//        registrationBean.addUrlPatterns("/hr/*");
//        return registrationBean;
//    }
}
