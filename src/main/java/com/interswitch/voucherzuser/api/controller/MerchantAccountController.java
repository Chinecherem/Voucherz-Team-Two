package com.interswitch.voucherzuser.api.controller;

import com.interswitch.voucherzuser.api.Model.ConfirmationToken;
import com.interswitch.voucherzuser.api.Model.CreateMerchantRequest;
import com.interswitch.voucherzuser.api.Model.Error;
import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Model.Response;
import com.interswitch.voucherzuser.api.Service.MailService;
import com.interswitch.voucherzuser.api.dao.ConfirmationDao;
import com.interswitch.voucherzuser.api.dao.Impl.ConfirmationDaoImpl;
import com.interswitch.voucherzuser.api.dao.MerchantDao;
import com.interswitch.voucherzuser.api.exception.UserExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/voucher")
public class MerchantAccountController {
//    @Autowired
//    Merchant merchant;

    @Autowired
    MerchantDao merchantDao;

    @Autowired
    ConfirmationDao confirmationDao;

    @Autowired
    MailService mailService;


    Response response;

@PostMapping("/register")
public Response registerMerchant(@RequestBody CreateMerchantRequest createMerchantRequest) throws UserExistException {

    Merchant existingUser = merchantDao.findByEmail(createMerchantRequest.getEmail());
    if (existingUser != null){
        throw new UserExistException("Merchant already Exist", "400 ");
    }

    Merchant merchant = new Merchant();
    merchant.setEnabled(createMerchantRequest.isEnabled());
    merchant.setCompanySize(createMerchantRequest.getCompanySize());
    merchant.setEmail(createMerchantRequest.getEmail());
    merchant.setFirstname(createMerchantRequest.getFirstname());
    merchant.setLastname(createMerchantRequest.getLastname());
    merchant.setMobileNo(createMerchantRequest.getMobileNo());
    merchant.setPassword(createMerchantRequest.getPassword());
    merchantDao.create(merchant);
    ConfirmationToken confirmationToken = new ConfirmationToken(merchant);
    confirmationDao.create(confirmationToken);

    SimpleMailMessage mailMessage = new SimpleMailMessage();
    mailMessage.setTo(merchant.getEmail());
    mailMessage.setSubject("Complete Registration");
    mailMessage.setFrom("onyia.blessing2014@gmail.com");
    mailMessage.setText("Thanks for signing into Voucherz. Please click here to confirm your account: " +
            "http://localhost:8080/confirm-token?token="+confirmationToken.getConfirmationToken());

    mailService.sendEmail(mailMessage);
    response = new Response("200","Email Sent",null);
    return response;
    }
@RequestMapping(value = "/confirm-account", method = {RequestMethod.GET, RequestMethod.POST})
public Response confirmMerchant(@PathVariable("token") String confirmationToken){
    ConfirmationToken token = confirmationDao.findByConfirmationToken(confirmationToken);

    if (token != null){
        Merchant merchant = merchantDao.findByEmail(token.getMerchant().getEmail());
        merchant.setEnabled(true);
        merchantDao.create(merchant);
        response = new Response("200", "Account Verified", null);
    }else {
        ArrayList<com.interswitch.voucherzuser.api.Model.Error> errors = new ArrayList<>();
        errors.add(new Error("Invalid Link", "The link is invalid"));
        response = new Response("404","The link is not Found",errors);
    }
        return response;
    }
}
