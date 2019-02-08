package com.Interswitch.Voucherz.Api.Controller;

import com.Interswitch.Voucherz.Api.Model.*;
import com.Interswitch.Voucherz.Api.Services.VoucherService;
import com.Interswitch.Voucherz.Api.Services.impl.ValidationService;
import com.Interswitch.Voucherz.Api.dao.VoucherDao;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin("*")
public class VoucherController {

    private VoucherService voucherService;

    private VoucherDao voucherDao;

    private RestTemplate restTemplate = new RestTemplate();



    public VoucherController(VoucherService voucherService, VoucherDao voucherDao){
        this.voucherService = voucherService;
        this.voucherDao=voucherDao;
    }


// POST localhost:9090/api/voucher/create?merchantId=566585 {}
    @RequestMapping(method = RequestMethod.POST, value ="/create/{token}")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public VoucherResponse createVoucher(@RequestBody @Validated final VoucherRequest voucherRequest, @PathVariable String token){

        VoucherResponse response;
        ResponseEntity<SessionResponse> sessionResponse =  ValidationService.confirmToken(token);
        if(sessionResponse == null){
            response = new VoucherResponse("400","Invalid Request", null,null);
            return response;
        }
        String email = sessionResponse.getBody().getEmail();
        System.out.println("email: "+ email);
        Voucher voucher = new Voucher();
        int GenCodeNo = voucherRequest.getNumOfCode();
        for (int i =0; i < GenCodeNo; i++) {
            voucherService.createVoucher(voucherRequest, email);
        }
        return new VoucherResponse("200","Created Successfully", null,voucher);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response updateVoucher(@PathVariable("id") long id, @RequestBody @Validated final Voucher voucher){
        voucher.setId(id);
        voucherService.updateVoucher(voucher);
        return new Response("200", "Updated Successfully", null);
    }

    @RequestMapping("/find/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public Voucher retrieveVoucher(@PathVariable("Id") Long Id ) {
        return voucherService.retrieveVoucher(Id);

    }

    @RequestMapping("/findByType/{voucherTypeId}")
    @ResponseStatus(HttpStatus.OK)
    public List<Voucher> retrieveByType(@PathVariable int voucherTypeId){
        return voucherService.retrieveByType(voucherTypeId);
    }

    @RequestMapping(value = "/findByCode/{code}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Voucher retrieveVoucherByCode(@PathVariable("code") String code){
        return voucherService.retrieveVoucherByCode(code);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/vouchers")
    @ResponseStatus(HttpStatus.OK)
    public List retriveAllVoucher(){
        return voucherService.retrieveAllVoucher();
    }


    @RequestMapping(method = RequestMethod.GET, value = "/voucher/merchant/{email}")
    @ResponseStatus(HttpStatus.OK)
    public Voucher retriveByMerchant(String email){
        return voucherService.retrieveVoucherByMerchant(email);
    }

    //Testing API Calls
    @PostMapping(path="/retrieveVoucherByMerchant/{id}", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Receive findByMerchant(@PathVariable("id") Long id){
        String newId= Long.toString(id);
        String url = "http://localhost:8083/api/user-management-service/find/"+newId;
        Receive response= restTemplate.getForObject(url, Receive.class);
        return response;
    }

    @GetMapping(path = "findAllMerchants", produces = "application/json")
    @ResponseBody
    public List<Receive> findAllMerchants(){
        String merchantJsonUrl = "http://localhost:8083/api/user-management-service/merchants";
        //Receive result = restTemplate.getForObject(merchantJsonUrl, Receive.class);

         List<Receive> recieve = Arrays.asList(restTemplate.getForObject(merchantJsonUrl, Receive[].class));
        return recieve;
    }




}
