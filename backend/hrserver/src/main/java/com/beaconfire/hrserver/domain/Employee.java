package com.beaconfire.hrserver.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Employee")
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "userId")
    private int userId;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "middleName")
    private String middleName;

    @Column(name = "preferedName")
    private String preferedName;

    @Column(name = "email")
    private String email;

    @Column(name = "cellPhone")
    private String cellPhone;

    @Column(name = "alternatePhone")
    private String alternatePhone;

    @Column(name = "gender")
    private String gender;

    @Column(name = "ssn")
    private String ssn;

    @Column(name = "dob")
    private String dob;

    @Column(name = "title")
    private String title;

    @Column(name = "managerId")
    private int managerId;

    @Column(name = "startDate")
    private String startDate;

    @Column(name = "endDate")
    private String endDate;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "car")
    private String car;

    @Column(name = "driverLicense")
    private String driverLicense;

    @Column(name = "driverLicenseExpirationDate")
    private String driverLicenseExpirationDate;

    @Column(name = "houseId")
    private int houseId;

//    @JsonIgnore
//    @OneToMany(mappedBy = "employeeId")
//    private List<FacilityReportDetail> facilityReportDetails;
}
