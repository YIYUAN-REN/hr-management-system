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
@Table(name = "contact")
public class Contact implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "cellPhone")
    private String cellPhone;

    @Column(name = "email")
    private String email;

    @Column(name = "employeeId")
    private int employeeId;

    @Column(name = "relationship")
    private String relationship;

    @Column(name = "title")
    private String title;

    @Column(name = "isReference")
    private boolean isReference;

    @Column(name = "isEmergency")
    private boolean isEmergency;

    @Column(name = "isLandLord")
    private boolean isLandlord;
}