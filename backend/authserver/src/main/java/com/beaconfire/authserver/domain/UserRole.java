package com.beaconfire.authserver.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "UserRole")
public class UserRole implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "userId")
    private int userId;

    @Column(name = "roleId")
    private int roleId;

    @Column(name = "activeFlag")
    private boolean activeFlag;

    @Column(name = "createDate")
    private String createDate;

    @Column(name = "lastModificationDate")
    private String lastModificationDate;
}
