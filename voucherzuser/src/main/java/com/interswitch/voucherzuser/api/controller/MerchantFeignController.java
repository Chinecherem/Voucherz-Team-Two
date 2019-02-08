package com.interswitch.voucherzuser.api.controller;

import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Service.MerchantServiceFeignClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

public class MerchantFeignController {

    @Autowired
    MerchantServiceFeignClient merchantServiceFeignClient;

    @RequestMapping("/voucher/merchant/{id}")
    public Merchant findVoucherByMerchant(long id){
        return merchantServiceFeignClient.findMerchant(id);
    }


}
