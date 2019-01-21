package com.interswitch.voucherzuser.api.Model;

import java.util.List;

public class LoginResponse extends Response {
    private final String status;


    public LoginResponse(String code, String description, List<Error> errors, String status) {
        super(code, description, errors);
        this.status = status;
    }
}
