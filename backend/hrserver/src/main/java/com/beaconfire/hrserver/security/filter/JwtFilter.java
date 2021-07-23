package com.beaconfire.hrserver.security.filter;

import com.beaconfire.hrserver.constant.Constant;
import com.beaconfire.hrserver.security.util.JwtUtil;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// OncePerRequestFilter means each request set in FilterConfig will go to filter
public class JwtFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String userName = JwtUtil.getSubject(httpServletRequest, Constant.JWT_TOKEN_COOKIE_NAME, Constant.SIGNING_KEY);
        // if not login, redirect to auth server
        if (userName == null){
            // get parameter set in FilterConfig
            String authService = this.getFilterConfig().getInitParameter("services.auth");
            // redirect attribute sent to auth server (LoginController login())
            httpServletResponse.sendRedirect(authService+"?redirect=" + httpServletRequest.getRequestURL());
        } else {
            /*
            should check username with more logic
             */
            httpServletRequest.setAttribute("userName", userName);
            filterChain.doFilter(httpServletRequest, httpServletResponse);
        }
    }
}
