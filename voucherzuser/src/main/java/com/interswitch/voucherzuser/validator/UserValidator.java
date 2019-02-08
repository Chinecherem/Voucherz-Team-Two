package com.interswitch.voucherzuser.validator;

import com.interswitch.voucherzuser.api.Model.LoginRequest;
import com.interswitch.voucherzuser.api.dao.MerchantDao;
import com.interswitch.voucherzuser.api.dao.PasswordDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserValidator {
    @Autowired
    private MerchantDao merchantDao;

    @Autowired
    private PasswordDao passwordDao;



    public String validateUser(String email, String password,LoginRequest loginRequest ){
        String iEmail = loginRequest.getEmail();
        String iPassword = loginRequest.getPassword();
        if (iPassword == passwordDao.findPassword(iEmail)){
            return "Validated";
        }
        return "User credentials not Valid";




    }
}
