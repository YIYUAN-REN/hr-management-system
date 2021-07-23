package com.example.w6d4q3.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "House", schema = "team", catalog = "")
public class HouseEntity {
    private int id;
    private int contactId;
    private String address;
    private Integer numberOfPerson;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "contactId", nullable = false)
    public int getContactId() {
        return contactId;
    }

    public void setContactId(int contactId) {
        this.contactId = contactId;
    }

    @Basic
    @Column(name = "address", nullable = true, length = 45)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Basic
    @Column(name = "numberOfPerson", nullable = true)
    public Integer getNumberOfPerson() {
        return numberOfPerson;
    }

    public void setNumberOfPerson(Integer numberOfPerson) {
        this.numberOfPerson = numberOfPerson;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HouseEntity that = (HouseEntity) o;
        return id == that.id && contactId == that.contactId && Objects.equals(address, that.address) && Objects.equals(numberOfPerson, that.numberOfPerson);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, contactId, address, numberOfPerson);
    }
}
