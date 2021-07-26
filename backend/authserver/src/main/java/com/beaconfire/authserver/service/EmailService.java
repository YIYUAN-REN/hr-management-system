package com.beaconfire.authserver.service;

import com.beaconfire.authserver.dao.RegistrationTokenDAO;
import com.beaconfire.authserver.dao.UserDAO;
import com.beaconfire.authserver.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Service
public class EmailService {
    @Autowired
    RegistrationTokenDAO registrationTokenDAO;

    @Autowired
    UserDAO userDao;

    @Autowired
    private JavaMailSender javaMailSender;

    public SimpleMailMessage getMessage(String fromEmail, String toEmail, String subject, String token, String time){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText("Please register with your token:\n" + token + "\n\nIt is valid before " + time);
        return message;
    }

    public String getLaterTime() {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.HOUR_OF_DAY, 3);
        String time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(calendar.getTime());
        return time;
    }

    @Transactional
    public void sendEmail(String email){
        String token = String.valueOf(email.hashCode());
        String time = getLaterTime();
        SimpleMailMessage message = getMessage("Ryan.ren.beaconfire@gmail.com", email, "Registration Token", token, time);
        javaMailSender.send(message);

        User user = userDao.getUserOnlyByUserName("RyanRen");
        registrationTokenDAO.insertToken(token, time, email, user);
    }

}
