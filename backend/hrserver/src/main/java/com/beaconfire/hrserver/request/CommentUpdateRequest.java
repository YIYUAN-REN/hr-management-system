package com.beaconfire.hrserver.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentUpdateRequest {
    private int detailId;
    private String comments;
}
