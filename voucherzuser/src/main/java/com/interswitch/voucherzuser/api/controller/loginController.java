package com.interswitch.voucherzuser.api.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.interswitch.voucherzuser.api.Model.LoginRequest;
import com.interswitch.voucherzuser.api.Model.LoginResponse;
import com.interswitch.voucherzuser.api.Model.Response;
import com.interswitch.voucherzuser.api.Model.SessionResponse;
import com.interswitch.voucherzuser.api.Service.LoginService;
//import com.interswitch.voucherzuser.api.dao.LoginDao;
import com.interswitch.voucherzuser.api.dao.MerchantDao;
import com.interswitch.voucherzuser.api.dao.PasswordDao;
import com.interswitch.voucherzuser.api.util.EncryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin("*")
public class loginController {

    @Autowired
    LoginService loginService;

    @Autowired
    private PasswordDao passwordDao;

    private EncryptPassword encryptPassword;

    private RestTemplate restTemplate = new RestTemplate();

    @Autowired
   private MerchantDao merchantDao;

    private LoginResponse response;

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity loginMerchant(@RequestBody @Validated final LoginRequest loginRequest) throws Exception {
        String url = "http://localhost:8083/api/voucher-management-service/vouchers";
        String sessionUrl = "http://172.20.20.127:6000/api/session/"+loginRequest.getEmail();
        String email = loginRequest.getEmail();
        String Ipassword = loginRequest.getPassword();
        String result = loginService.loginUser(email, Ipassword);
        //HttpEntity<SessionResponse> res = new HttpEntity<SessionResponse>()
        if (result.equals("Passed")) {
            SessionResponse response = restTemplate.postForObject(sessionUrl, null, SessionResponse.class);

            return new ResponseEntity(new LoginResponse("202", "Login Successful",response, merchantDao.findByEmail(email)), HttpStatus.ACCEPTED);
        }
        return new ResponseEntity(new LoginResponse("404", "Email or Password incorrect", null, null),HttpStatus.NOT_FOUND);

    }


}






