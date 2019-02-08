package com.Interswitch.Voucherz.Api.Services.impl;

import com.Interswitch.Voucherz.Api.Model.SessionResponse;
import com.Interswitch.Voucherz.Api.Model.VoucherResponse;
import com.Interswitch.Voucherz.Api.dao.VoucherDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

public class ValidationService {
    private  String token;
    private String email;

    @Autowired
    private static RestTemplate restTemplate = new RestTemplate();

    private VoucherDao voucherDao;


    public static ResponseEntity<SessionResponse> confirmToken(String token){
        ResponseEntity<SessionResponse> response = null;
        //String url = "http://localhost:8083/api/voucher-management-service/vouchers";
        String sessionUrl = "http://172.20.20.127:6000/api/session/"+token+"/voucher-management-service";

        //SessionResponse response = restTemplate.postForObject(sessionUrl, null, SessionResponse.class);
        SessionResponse sessionResponse = new SessionResponse();
        //SessionResponse response = restTemplate.patchForObject(sessionUrl, SessionResponse.class);
        HttpEntity<SessionResponse> entity = new HttpEntity<SessionResponse>(sessionResponse);
        try{
           response = restTemplate.exchange(sessionUrl, HttpMethod.PUT, entity, SessionResponse.class);
        }
        catch(Exception e){
            response = null;
        }
        System.out.println("---------------" + response);
        return response;
    }
}
