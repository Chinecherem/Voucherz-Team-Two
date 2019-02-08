package com.interswitch.voucherzuser.api.Service.impl;

import com.interswitch.voucherzuser.api.Model.PasswordReset;
import com.interswitch.voucherzuser.api.Model.PasswordResetRequest;
import com.interswitch.voucherzuser.api.Service.PasswordResetService;
import com.interswitch.voucherzuser.api.dao.PasswordResetDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class PasswordResetServiceImpl implements PasswordResetService {

    @Autowired
    private PasswordResetDao passwordResetDao;

    private PasswordReset passwordReset;


    @Override
    public PasswordReset resetUserPassword(String email, String password) {
                return passwordResetDao.resetPassword(email, password);
    }

}
