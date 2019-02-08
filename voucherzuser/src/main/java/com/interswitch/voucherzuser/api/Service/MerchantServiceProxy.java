package com.interswitch.voucherzuser.api.Service;


import com.interswitch.voucherzuser.api.Model.CreateMerchantRequest;
import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Model.Response;
import com.interswitch.voucherzuser.api.exception.UserExistException;
//import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface MerchantServiceProxy {
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public Response createMerchant(@RequestBody @Validated final CreateMerchantRequest createMerchantRequest)throws UserExistException;


    @RequestMapping(value = "/confirmAccount", method = {RequestMethod.GET, RequestMethod.POST})
    public Response confirmMerchant(@PathVariable("token") String confirmationToken)throws UserExistException;


    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public Response updateMerchant(@PathVariable ("id") long id, @RequestBody @Validated final Merchant merchant);


    @RequestMapping("/find/{id}")
    public Merchant findMerchant(@PathVariable("id") long id);


    @RequestMapping("/merchants")
    public List<Merchant> findAllMerchants();

}
