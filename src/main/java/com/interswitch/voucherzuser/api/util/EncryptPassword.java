package com.interswitch.voucherzuser.api.util;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


public class EncryptPassword{
//    private String password;
//
//    public EncryptPassword(String password) {
//        this.password = password;
//    }

    public static String generateEncryptPassword(String password){
        ///String cryptedPassword = new BCryptPasswordEncoder().encode(password);
        return password;
    }
}
