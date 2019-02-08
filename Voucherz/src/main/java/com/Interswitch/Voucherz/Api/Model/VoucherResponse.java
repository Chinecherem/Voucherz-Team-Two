package com.Interswitch.Voucherz.Api.Model;

import com.Interswitch.Voucherz.Api.Model.SessionResponse;
import com.Interswitch.Voucherz.Api.Model.Voucher;

import java.util.List;

public class VoucherResponse {
    private String code;
    private String description;
    private SessionResponse response;
    private Object voucher;

    public VoucherResponse(String code, String description, SessionResponse response, Object voucher) {
        this.code = code;
        this.description = description;
        this.response = response;
        this.voucher = voucher;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public SessionResponse getResponse() {
        return response;
    }

    public void setResponse(SessionResponse response) {
        this.response = response;
    }


    @Override
    public String toString() {
        return "LoginResponse{" +
                "code='" + code + '\'' +
                ", description='" + description + '\'' +
                ", response=" + response +
                '}';
    }
}



