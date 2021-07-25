package com.beaconfire.hrserver.response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class VisaStartResponse {
    private String visaType;
    private boolean I983Submitted;
    private boolean OptStemReceiptReceived;
}
