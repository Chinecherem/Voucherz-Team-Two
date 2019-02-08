package com.interswitch.voucherzuser.api.util;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Component;


@Component
public class EncryptPassword implements com.interswitch.voucherzuser.api.util.PasswordEncoder {
//    private String password;
//
//    public EncryptPassword(String password) {
//        this.password = password;
//    }

//    public static String generateEncryptPassword(String password){
//        String cryptedPassword = new BCryptPasswordEncoder().encode(password);
//        return cryptedPassword;
//    }

    @Override
    public String encode(CharSequence rawPassword) {
        return BCrypt.hashpw(rawPassword.toString(), BCrypt.gensalt(4));
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return BCrypt.checkpw(rawPassword.toString(),encodedPassword);
    }
}
