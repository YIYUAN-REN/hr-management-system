package com.beaconfire.hrserver.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "Employee", schema = "team", catalog = "")
public class Employee implements Serializable {
    private int id;
    private int userId;
    private String firstName;
    private String lastName;
    private String middleName;
    private String preferedName;
    private String email;
    private String cellPhone;
    private String alternatePhone;
    private String gender;
    private String ssn;
    private String dob;
    private String title;
    private int managerId;
    private String startDate;
    private String endDate;
    private String avatar;
    private String car;
    private String driverLicense;
    private String driverLicenseExpirationDate;
    private int houseId;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "userId", nullable = false)
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "firstName", nullable = true, length = 45)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "lastName", nullable = true, length = 45)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Basic
    @Column(name = "middleName", nullable = true, length = 45)
    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    @Basic
    @Column(name = "preferedName", nullable = true, length = 45)
    public String getPreferedName() {
        return preferedName;
    }

    public void setPreferedName(String preferedName) {
        this.preferedName = preferedName;
    }

    @Basic
    @Column(name = "email", nullable = true, length = 45)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "cellPhone", nullable = true, length = 10)
    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    @Basic
    @Column(name = "alternatePhone", nullable = true, length = 10)
    public String getAlternatePhone() {
        return alternatePhone;
    }

    public void setAlternatePhone(String alternatePhone) {
        this.alternatePhone = alternatePhone;
    }

    @Basic
    @Column(name = "gender", nullable = true, length = 45)
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Basic
    @Column(name = "ssn", nullable = true, length = 10)
    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    @Basic
    @Column(name = "dob", nullable = true, length = 45)
    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    @Basic
    @Column(name = "title", nullable = true, length = 45)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "managerId", nullable = true)
    public int getManagerId() {
        return managerId;
    }

    public void setManagerId(int managerId) {
        this.managerId = managerId;
    }

    @Basic
    @Column(name = "startDate", nullable = true, length = 45)
    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    @Basic
    @Column(name = "endDate", nullable = true, length = 45)
    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    @Basic
    @Column(name = "avatar", nullable = true, length = 45)
    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    @Basic
    @Column(name = "car", nullable = true, length = 45)
    public String getCar() {
        return car;
    }

    public void setCar(String car) {
        this.car = car;
    }

    @Basic
    @Column(name = "driverLicense", nullable = true, length = 45)
    public String getDriverLicense() {
        return driverLicense;
    }

    public void setDriverLicense(String driverLicense) {
        this.driverLicense = driverLicense;
    }

    @Basic
    @Column(name = "driverLicenseExpirationDate", nullable = true, length = 45)
    public String getDriverLicenseExpirationDate() {
        return driverLicenseExpirationDate;
    }

    public void setDriverLicenseExpirationDate(String driverLicenseExpirationDate) {
        this.driverLicenseExpirationDate = driverLicenseExpirationDate;
    }

    @Basic
    @Column(name = "houseId", nullable = true)
    public int getHouseId() {
        return houseId;
    }

    public void setHouseId(int houseId) {
        this.houseId = houseId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee that = (Employee) o;
        return id == that.id && userId == that.userId && managerId == that.managerId && houseId == that.houseId && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(middleName, that.middleName) && Objects.equals(preferedName, that.preferedName) && Objects.equals(email, that.email) && Objects.equals(cellPhone, that.cellPhone) && Objects.equals(alternatePhone, that.alternatePhone) && Objects.equals(gender, that.gender) && Objects.equals(ssn, that.ssn) && Objects.equals(dob, that.dob) && Objects.equals(title, that.title) && Objects.equals(startDate, that.startDate) && Objects.equals(endDate, that.endDate) && Objects.equals(avatar, that.avatar) && Objects.equals(car, that.car) && Objects.equals(driverLicense, that.driverLicense) && Objects.equals(driverLicenseExpirationDate, that.driverLicenseExpirationDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, firstName, lastName, middleName, preferedName, email, cellPhone, alternatePhone, gender, ssn, dob, title, managerId, startDate, endDate, avatar, car, driverLicense, driverLicenseExpirationDate, houseId);
    }
}
