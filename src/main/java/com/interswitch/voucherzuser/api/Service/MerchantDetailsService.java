package com.interswitch.voucherzuser.api.Service;

import com.interswitch.voucherzuser.api.Model.Merchant;

public interface MerchantDetailsService {
    public Merchant findByEmail(String email);
}
