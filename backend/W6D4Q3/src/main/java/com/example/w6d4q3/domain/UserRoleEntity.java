package com.example.w6d4q3.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "UserRole", schema = "team", catalog = "")
public class UserRoleEntity {
    private int id;
    private int userId;
    private int roleId;
    private Byte activeFlag;
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
    @Column(name = "userId", nullable = false)
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "roleId", nullable = false)
    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    @Basic
    @Column(name = "activeFlag", nullable = true)
    public Byte getActiveFlag() {
        return activeFlag;
    }

    public void setActiveFlag(Byte activeFlag) {
        this.activeFlag = activeFlag;
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
        UserRoleEntity that = (UserRoleEntity) o;
        return id == that.id && userId == that.userId && roleId == that.roleId && Objects.equals(activeFlag, that.activeFlag) && Objects.equals(createDate, that.createDate) && Objects.equals(lastModificationDate, that.lastModificationDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, roleId, activeFlag, createDate, lastModificationDate);
    }
}
