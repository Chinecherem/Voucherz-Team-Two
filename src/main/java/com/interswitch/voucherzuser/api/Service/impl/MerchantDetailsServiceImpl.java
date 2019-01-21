package com.interswitch.voucherzuser.api.Service.impl;

import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Service.MerchantDetailsService;
import com.interswitch.voucherzuser.api.dao.MerchantDao;
import com.interswitch.voucherzuser.api.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.constraints.Email;

public class MerchantDetailsServiceImpl implements MerchantDetailsService{
    @Autowired
    MerchantDao merchantDao;

    //Merchant merchant = merchantDao.findByEmail(email);

    @Override
    public Merchant findByEmail(String email) {
        Merchant merchant = merchantDao.findByEmail(email);
        if (merchant == null){
            try {
                throw new UserNotFoundException("No user found with Email");
            } catch (UserNotFoundException e) {
                e.printStackTrace();
            }
        }
//        boolean enabled = true;
//        return
//                (merchant.getEmail(),
//                        merchant.getPassword().toLowerCase(), enabled,
//                        getAuthorities(merchant.getRoles()));
        return null;
    }
}
