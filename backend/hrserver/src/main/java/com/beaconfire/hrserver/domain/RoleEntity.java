package com.example.w6d4q3.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Role", schema = "team", catalog = "")
public class RoleEntity {
    private int id;
    private String roleName;
    private String description;
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
    @Column(name = "roleName", nullable = true, length = 45)
    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Basic
    @Column(name = "description", nullable = true, length = 45)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
        RoleEntity that = (RoleEntity) o;
        return id == that.id && Objects.equals(roleName, that.roleName) && Objects.equals(description, that.description) && Objects.equals(createDate, that.createDate) && Objects.equals(lastModificationDate, that.lastModificationDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, roleName, description, createDate, lastModificationDate);
    }
}
