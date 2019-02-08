package com.interswitch.voucherzuser.api.Service;

import com.interswitch.voucherzuser.api.Model.ConfirmationToken;

public interface ConfirmationTokenService {
    ConfirmationToken confirmConfirmationToken (String confirmationToken);
}
