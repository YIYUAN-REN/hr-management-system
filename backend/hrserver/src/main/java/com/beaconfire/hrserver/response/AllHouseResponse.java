package com.beaconfire.hrserver.response;

import com.beaconfire.hrserver.common.ResponseStatus;
import com.beaconfire.hrserver.domain.House;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AllHouseResponse {
    private List<House> houses;
}
