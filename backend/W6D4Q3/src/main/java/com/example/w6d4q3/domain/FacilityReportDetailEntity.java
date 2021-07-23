package com.example.w6d4q3.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "FacilityReportDetail", schema = "team", catalog = "")
public class FacilityReportDetailEntity {
    private int id;
    private int reportId;
    private int employeeId;
    private String comments;
    private String createDate;
    private String lastModificationDate;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "reportId", nullable = false)
    public int getReportId() {
        return reportId;
    }

    public void setReportId(int reportId) {
        this.reportId = reportId;
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
    @Column(name = "comments", nullable = true, length = 45)
    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    @Basic
    @Column(name = "createDate", nullable = true, length = 45)
    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    @Basic
    @Column(name = "lastModificationDate", nullable = true, length = 45)
    public String getLastModificationDate() {
        return lastModificationDate;
    }

    public void setLastModificationDate(String lastModificationDate) {
        this.lastModificationDate = lastModificationDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FacilityReportDetailEntity that = (FacilityReportDetailEntity) o;
        return id == that.id && reportId == that.reportId && employeeId == that.employeeId && Objects.equals(comments, that.comments) && Objects.equals(createDate, that.createDate) && Objects.equals(lastModificationDate, that.lastModificationDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, reportId, employeeId, comments, createDate, lastModificationDate);
    }
}
