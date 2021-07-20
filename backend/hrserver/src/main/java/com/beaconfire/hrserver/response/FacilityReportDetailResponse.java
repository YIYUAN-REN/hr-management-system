package com.beaconfire.hrserver.response;

import com.beaconfire.hrserver.domain.FacilityReport;
import com.beaconfire.hrserver.domain.FacilityReportDetail;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class FacilityReportDetailResponse {
    private FacilityReport facilityReport;
    private List<FacilityReportDetail> facilityReportDetails;
}
