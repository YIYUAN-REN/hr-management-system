package com.beaconfire.hrserver.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentPostRequest {
    private int reportId;
    private int employeeId;
    private String comments;
}
