package com.beaconfire.hrserver.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestConfig {
    private RestTemplateBuilder builder;

    @Autowired
    public void setBuilder(RestTemplateBuilder builder) {
        this.builder = builder;
    }

    @Bean
    public RestTemplate restTemplate(){
        return builder
//                .additionalMessageConverters()
//                .errorHandler()
//                .rootUri()
//                .setReadTimeout()
                .build();
    }
}
