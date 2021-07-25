package com.beaconfire.hrserver.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HrDecideRequest {
    String decide;
    String uid;
    String comment;
}
