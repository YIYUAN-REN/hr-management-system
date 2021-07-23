package com.example.w6d4q3.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "RegistrationToken", schema = "team", catalog = "")
public class RegistrationTokenEntity {
    private int id;
    private String token;
    private Integer validDuration;
    private String email;
    private Integer createdBy;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "token", nullable = true, length = 45)
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Basic
    @Column(name = "validDuration", nullable = true)
    public Integer getValidDuration() {
        return validDuration;
    }

    public void setValidDuration(Integer validDuration) {
        this.validDuration = validDuration;
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
    @Column(name = "createdBy", nullable = true)
    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RegistrationTokenEntity that = (RegistrationTokenEntity) o;
        return id == that.id && Objects.equals(token, that.token) && Objects.equals(validDuration, that.validDuration) && Objects.equals(email, that.email) && Objects.equals(createdBy, that.createdBy);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, token, validDuration, email, createdBy);
    }
}
