package com.interswitch.voucherzuser.api.Model;

import java.util.List;

public class LoginResponse  {
    private String code;
    private String description;
    private SessionResponse response;
    private Merchant merchant;

    public LoginResponse(String code, String description, SessionResponse response, Merchant merchant) {
        this.code = code;
        this.description = description;
        this.response = response;
        this.merchant = merchant;
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

    public Merchant getMerchant() {
        return merchant;
    }

    public void setMerchant(Merchant merchant) {
        this.merchant = merchant;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "code='" + code + '\'' +
                ", description='" + description + '\'' +
                ", response=" + response +
                ", merchant=" + merchant +
                '}';
    }
}



