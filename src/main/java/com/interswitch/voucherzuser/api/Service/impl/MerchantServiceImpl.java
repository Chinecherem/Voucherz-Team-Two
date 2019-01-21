package com.interswitch.voucherzuser.api.Service.impl;

import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Service.MerchantService;
import com.interswitch.voucherzuser.api.dao.MerchantDao;
import com.interswitch.voucherzuser.api.exception.UserExistException;
import com.interswitch.voucherzuser.api.util.EncryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MerchantServiceImpl implements MerchantService {

    @Autowired
    MerchantDao merchantDao;

    @Override
    public Merchant createMerchant(Merchant merchant) throws UserExistException {
        //check if user already exists
        String existingMerchant = merchant.getEmail();
        if (existingMerchant != null){
            throw new UserExistException("Merchant already Exist", "400 ");
        }
        String ph = EncryptPassword.generateEncryptPassword(merchant.getPassword());
        merchant.setPassword(ph);
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
        System.out.println("Hitting the service");
        return merchantDao.findAll();
    }


}
