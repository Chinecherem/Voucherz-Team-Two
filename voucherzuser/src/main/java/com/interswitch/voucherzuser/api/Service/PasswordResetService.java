package com.interswitch.voucherzuser.api.Service;

import com.interswitch.voucherzuser.api.Model.PasswordReset;
import com.interswitch.voucherzuser.api.Model.PasswordResetRequest;

public interface PasswordResetService {
    PasswordReset resetUserPassword(String email, String password);
}
