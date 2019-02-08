package com.interswitch.voucherzuser.api.Service.impl;

import com.interswitch.voucherzuser.api.Model.ConfirmationToken;
import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Service.LoginService;
import com.interswitch.voucherzuser.api.dao.ConfirmationDao;
//import com.interswitch.voucherzuser.api.dao.LoginDao;
import com.interswitch.voucherzuser.api.dao.MerchantDao;
import com.interswitch.voucherzuser.api.dao.PasswordDao;
import com.interswitch.voucherzuser.api.util.EncryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {


    @Autowired
    private PasswordDao passwordDao;

    @Autowired
    private EncryptPassword encryptPassword;


    @Override
    public String loginUser(String email, String hashPassword) {
        String encodedPwdb= passwordDao.findPassword(email);
        boolean equals = encryptPassword.matches(hashPassword, encodedPwdb);
        if (equals){
                return "Passed";
            }
        return "Failed";
        }

    }

