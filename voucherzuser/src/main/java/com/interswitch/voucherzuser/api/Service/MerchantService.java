package com.interswitch.voucherzuser.api.Service;

import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.exception.UserExistException;

import java.util.List;

public interface MerchantService {
    public Merchant createMerchant(Merchant merchant);
    public boolean updateMerchant(Merchant merchant);
    public Merchant findMerchant(Long id);
    public List<Merchant> findAllMerchants();
    public Merchant findMerchantByEmail(String email);
}
