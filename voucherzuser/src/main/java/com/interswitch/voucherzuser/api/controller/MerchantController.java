package com.interswitch.voucherzuser.api.controller;
import com.interswitch.voucherzuser.api.Model.Error;
import com.interswitch.voucherzuser.api.Model.*;
import com.interswitch.voucherzuser.api.Service.MailService;
import com.interswitch.voucherzuser.api.Service.MerchantService;
import com.interswitch.voucherzuser.api.Service.MerchantServiceProxy;
import com.interswitch.voucherzuser.api.dao.ConfirmationDao;
import com.interswitch.voucherzuser.api.exception.UserExistException;
import com.interswitch.voucherzuser.api.util.EncryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class MerchantController implements MerchantServiceProxy {

    private MerchantService merchantService;

    @Autowired
    ConfirmationDao confirmationDao;

    private EncryptPassword encryptPassword;

    @Autowired
    MailService mailService;

    private RestTemplate restTemplate = new RestTemplate();

    Response response;

    public MerchantController(MerchantService merchantService){
        this.merchantService = merchantService;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/register")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public Response createMerchant(@RequestBody @Validated final CreateMerchantRequest createMerchantRequest) throws UserExistException {
        Merchant merchant = new Merchant();
        String existingMerchant = merchant.getEmail();
        if (existingMerchant != null){
            throw new UserExistException("Merchant already Exist", "400 ");
        }
        merchant.setFirstname(createMerchantRequest.getFirstname());
        merchant.setLastname(createMerchantRequest.getLastname());
        merchant.setEmail(createMerchantRequest.getEmail());
        String userPassword = createMerchantRequest.getPassword();
        String userConfirmPassword = createMerchantRequest.getConfirmPassword();
        if (!userPassword.equals(userConfirmPassword)){
            ArrayList<com.interswitch.voucherzuser.api.Model.Error> errors = new ArrayList<>();
            errors.add(new Error("Password Mismatch", "Password does not match ConfirmPassword"));
            return new Response("400","Passowrd Don't match",errors);
        }
        merchant.setPassword(BCrypt.hashpw(userPassword, BCrypt.gensalt(4)));
        merchant.setMobileNo(createMerchantRequest.getMobileNo());
        merchant.setIsenabled(false);
        merchant.setRole("ROLE_USER");
        merchantService.createMerchant(merchant);

        ConfirmationToken confirmationToken = new ConfirmationToken(merchant);
        confirmationDao.create(confirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(merchant.getEmail());
        mailMessage.setSubject("Complete Registration");
        mailMessage.setFrom("onyia.blessing2014@gmail.com");
        mailMessage.setText("Thanks for signing into Voucherz. Please click here to confirm your account: " +
                "http://localhost:3000/confirmAccount?token="+confirmationToken.getConfirmationToken());

        mailService.sendEmail(mailMessage);

        response = new Response("201", "Merchant Created Successfully, confirmation Email sent", null);

        return response;
    }

    @RequestMapping(value = "/confirmAccount", method = {RequestMethod.GET, RequestMethod.POST})
    public Response confirmMerchant(@PathVariable("token") String confirmationToken) throws UserExistException {
        ConfirmationToken token = confirmationDao.findByConfirmationToken(confirmationToken);

        if (token != null){
            Merchant merchant = merchantService.findMerchantByEmail(token.getMerchant().getEmail());
            merchant.setIsenabled(true);
            merchantService.createMerchant(merchant);
            response = new Response("200", "Account Verified", null);
        }else {
            ArrayList<com.interswitch.voucherzuser.api.Model.Error> errors = new ArrayList<>();
            errors.add(new Error("Invalid Account", "Account Verification not Successful"));
            response = new Response("400","Can't verify account",errors);
        }
        return response;
    }

    public Merchant merchantSession(){
        return null;
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response updateMerchant(@PathVariable ("id") long id, @RequestBody @Validated final Merchant merchant){
        merchant.setId(id);
        merchantService.updateMerchant(merchant);
        return new Response("200", "Update Successful",null);
    }

    @RequestMapping("/find/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Merchant findMerchant(@PathVariable("id") long id){
        return merchantService.findMerchant(id);
    }

    @RequestMapping("/merchants")
    @ResponseStatus(HttpStatus.OK)
    public List<Merchant> findAllMerchants(){
        return merchantService.findAllMerchants();
    }

    @GetMapping("/hello")
    public String hello(){
        String url = "http://localhost:8083/api/voucher-management-service/server";
        return restTemplate.getForObject(url, String.class);
    }

}

