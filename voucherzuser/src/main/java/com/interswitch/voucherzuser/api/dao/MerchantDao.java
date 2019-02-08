package com.interswitch.voucherzuser.api.dao;

import com.interswitch.voucherzuser.api.Model.Merchant;

public interface MerchantDao extends BaseDao<Merchant>{
    Merchant findByEmail(String email);

}
