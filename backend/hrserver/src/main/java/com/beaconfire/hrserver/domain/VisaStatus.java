package com.example.w6d4q3.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "VisaStatus", schema = "team", catalog = "")
public class VisaStatus implements Serializable {
    private int id;
    private int employeeId;
    private String visaType;
    private Byte active;
    private String modificationDate;
    private String visaStartDate;
    private String visaEndDate;

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
    @Column(name = "employeeId", nullable = false)
    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    @Basic
    @Column(name = "visaType", nullable = true, length = 45)
    public String getVisaType() {
        return visaType;
    }

    public void setVisaType(String visaType) {
        this.visaType = visaType;
    }

    @Basic
    @Column(name = "active", nullable = true)
    public Byte getActive() {
        return active;
    }

    public void setActive(Byte active) {
        this.active = active;
    }

    @Basic
    @Column(name = "modificationDate", nullable = true, length = 45)
    public String getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(String modificationDate) {
        this.modificationDate = modificationDate;
    }

    @Basic
    @Column(name = "visaStartDate", nullable = true, length = 45)
    public String getVisaStartDate() {
        return visaStartDate;
    }

    public void setVisaStartDate(String visaStartDate) {
        this.visaStartDate = visaStartDate;
    }

    @Basic
    @Column(name = "visaEndDate", nullable = true, length = 45)
    public String getVisaEndDate() {
        return visaEndDate;
    }

    public void setVisaEndDate(String visaEndDate) {
        this.visaEndDate = visaEndDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VisaStatus that = (VisaStatus) o;
        return id == that.id && employeeId == that.employeeId && Objects.equals(visaType, that.visaType) && Objects.equals(active, that.active) && Objects.equals(modificationDate, that.modificationDate) && Objects.equals(visaStartDate, that.visaStartDate) && Objects.equals(visaEndDate, that.visaEndDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, employeeId, visaType, active, modificationDate, visaStartDate, visaEndDate);
    }
}
