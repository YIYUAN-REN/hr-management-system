package com.example.w6d4q3.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "DigitalDocument", schema = "team", catalog = "")
public class DigitalDocumentEntity {
    private int id;
    private String type;
    private Byte required;
    private String templateLocation;
    private String description;
    private String title;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "type", nullable = true, length = 45)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Basic
    @Column(name = "required", nullable = true)
    public Byte getRequired() {
        return required;
    }

    public void setRequired(Byte required) {
        this.required = required;
    }

    @Basic
    @Column(name = "templateLocation", nullable = true, length = 45)
    public String getTemplateLocation() {
        return templateLocation;
    }

    public void setTemplateLocation(String templateLocation) {
        this.templateLocation = templateLocation;
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
    @Column(name = "title", nullable = true, length = 45)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DigitalDocumentEntity that = (DigitalDocumentEntity) o;
        return id == that.id && Objects.equals(type, that.type) && Objects.equals(required, that.required) && Objects.equals(templateLocation, that.templateLocation) && Objects.equals(description, that.description) && Objects.equals(title, that.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type, required, templateLocation, description, title);
    }
}
