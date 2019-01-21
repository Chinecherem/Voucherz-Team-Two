package com.interswitch.voucherzuser.api.controller;

import com.interswitch.voucherzuser.api.Model.Error;
import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Model.Response;
import com.interswitch.voucherzuser.api.Service.MerchantService;
import com.interswitch.voucherzuser.api.exception.UserExistException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/merchant")
public class MerchantController {

    private MerchantService merchantService;

    public MerchantController(MerchantService merchantService){
        this.merchantService = merchantService;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public Response createMerchant(@RequestBody @Validated final Merchant merchant) {
        Response response;

        try {
            merchantService.createMerchant(merchant);
            response = new Response("201", "Merchant Created Successfully", null);
        } catch (UserExistException e) {
            e.printStackTrace();
            ArrayList<Error> errors = new ArrayList<>();
            errors.add(new Error("Duplicate User", "You can't register yourself twice, user credentials already exist"));
            response = new Response(e.getCode(), e.getMessage(), errors);
        }
        return response;
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

}

