package com.beaconfire.hrserver.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="VisaStatus")
public class Visa implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "employeeId")
    private int employeeId;

    @Column(name = "visaType")
    private String visaType;

    @Column(name = "active")
    private Boolean active;

    @Column(name = "modificationDate")
    private String modificationDate;

    @Column(name = "visaStartDate")
    private String visaStartDate;

    @Column(name = "visaEndDate")
    private String visaEndDate;

    @Column(name = "I983Submitted")
    private Boolean I983Submitted;

    @Column(name = "OptStemReceiptReceived")
    private Boolean OptStemReceiptReceived;

}
