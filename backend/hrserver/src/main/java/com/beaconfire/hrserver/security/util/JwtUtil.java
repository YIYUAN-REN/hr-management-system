package com.beaconfire.hrserver.security.util;

import io.jsonwebtoken.Jwts;

import javax.servlet.http.HttpServletRequest;

public class JwtUtil {

    // get subject (payload) in JWT
    public static String getSubject(HttpServletRequest httpServletRequest, String jwtCookieName, String signingKey){
        // get token (JWT) and return payload (username)
        String token = CookieUtil.getValue(httpServletRequest, jwtCookieName);
        if (token == null){
            return null;
        }
        return Jwts.parser().setSigningKey(signingKey).parseClaimsJws(token).getBody().getSubject();
    }

}
