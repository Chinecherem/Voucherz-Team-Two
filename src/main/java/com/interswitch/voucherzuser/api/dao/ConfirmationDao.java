package com.interswitch.voucherzuser.api.dao;

import com.interswitch.voucherzuser.api.Model.ConfirmationToken;
import com.interswitch.voucherzuser.api.Model.CreateMerchantRequest;
//import com.interswitch.voucherzuser.api.Model.Merchant;

public interface ConfirmationDao{
    ConfirmationToken create(ConfirmationToken confirmationToken);
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
