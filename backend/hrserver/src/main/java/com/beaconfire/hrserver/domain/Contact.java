package com.beaconfire.hrserver.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "Contact", schema = "hrdb")
public class Contact implements Serializable {
    private int id;
    private String firstName;
    private String lastName;
    private String cellPhone;
    private String email;
    private int employeeId;
    private String relationship;
    private String title;
    private Byte isReference;
    private Byte isEmergency;
    private Byte isLandLord;

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
    @Column(name = "cellPhone", nullable = true, length = 45)
    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
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
    @Column(name = "employeeId", nullable = false)
    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    @Basic
    @Column(name = "relationship", nullable = true, length = 45)
    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
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
    @Column(name = "isReference", nullable = true)
    public Byte getIsReference() {
        return isReference;
    }

    public void setIsReference(Byte isReference) {
        this.isReference = isReference;
    }

    @Basic
    @Column(name = "isEmergency", nullable = true)
    public Byte getIsEmergency() {
        return isEmergency;
    }

    public void setIsEmergency(Byte isEmergency) {
        this.isEmergency = isEmergency;
    }

    @Basic
    @Column(name = "isLandLord", nullable = true)
    public Byte getIsLandLord() {
        return isLandLord;
    }

    public void setIsLandLord(Byte isLandLord) {
        this.isLandLord = isLandLord;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Contact that = (Contact) o;
        return id == that.id && employeeId == that.employeeId && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(cellPhone, that.cellPhone) && Objects.equals(email, that.email) && Objects.equals(relationship, that.relationship) && Objects.equals(title, that.title) && Objects.equals(isReference, that.isReference) && Objects.equals(isEmergency, that.isEmergency) && Objects.equals(isLandLord, that.isLandLord);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, cellPhone, email, employeeId, relationship, title, isReference, isEmergency, isLandLord);
    }
}
