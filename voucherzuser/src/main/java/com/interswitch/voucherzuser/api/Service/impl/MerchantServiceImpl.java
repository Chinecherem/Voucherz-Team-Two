package com.interswitch.voucherzuser.api.Service.impl;

import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Service.MerchantService;
import com.interswitch.voucherzuser.api.dao.MerchantDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MerchantServiceImpl implements MerchantService {

    @Autowired
    MerchantDao merchantDao;

    @Override
    public Merchant createMerchant(Merchant merchant){
        return merchantDao.create(merchant);
    }

    @Override
    public boolean updateMerchant(Merchant merchant){
        return merchantDao.update(merchant);
    }

    @Override
    public Merchant findMerchant(Long id) {
        return merchantDao.find(id);
    }

    @Override
    public List<Merchant> findAllMerchants() {
        return merchantDao.findAll();
    }

    @Override
    public Merchant findMerchantByEmail(String email) {
        return merchantDao.findByEmail(email);
    }


}
