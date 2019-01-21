package com.interswitch.voucherzuser.api.Model;

import java.util.List;

public class CreateMerchantResponse extends Response {
    private final String status;

    public CreateMerchantResponse(String code, String description, List<Error> errors, String status) {
        super(code, description, errors);
        this.status = status;
    }
}
