package com.example.w6d4q3.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "ApplicationWorkFlow", schema = "team", catalog = "")
public class ApplicationWorkFlowEntity {
    private int id;
    private int employeeId;
    private String createDate;
    private String modificationDate;
    private String status;
    private String comments;

    @Id
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
    @Column(name = "createDate", nullable = true, length = 45)
    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
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
    @Column(name = "status", nullable = true, length = 45)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Basic
    @Column(name = "comments", nullable = true, length = 45)
    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ApplicationWorkFlowEntity that = (ApplicationWorkFlowEntity) o;
        return id == that.id && employeeId == that.employeeId && Objects.equals(createDate, that.createDate) && Objects.equals(modificationDate, that.modificationDate) && Objects.equals(status, that.status) && Objects.equals(comments, that.comments);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, employeeId, createDate, modificationDate, status, comments);
    }
}
