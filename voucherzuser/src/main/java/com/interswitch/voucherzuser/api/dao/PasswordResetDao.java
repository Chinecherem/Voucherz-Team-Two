package com.interswitch.voucherzuser.api.dao;

import com.interswitch.voucherzuser.api.Model.PasswordReset;

public interface PasswordResetDao {
    PasswordReset resetPassword(String email,String password);
}
