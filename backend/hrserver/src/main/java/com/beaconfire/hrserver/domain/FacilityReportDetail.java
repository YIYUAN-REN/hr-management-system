package com.beaconfire.hrserver.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "FacilityReportDetail")
public class FacilityReportDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "reportId")
    private int reportId;

//    @ManyToOne
//    @JoinColumn(name = "employeeId")
    @Column(name = "employeeId")
    private int employeeId;

    @Column(name = "comments")
    private String comments;

    @Column(name = "createDate")
    private String createDate;

    @Column(name = "lastModificationDate")
    private String lastModificationDate;
}
