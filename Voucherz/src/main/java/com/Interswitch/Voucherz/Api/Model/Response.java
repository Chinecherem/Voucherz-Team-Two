package com.Interswitch.Voucherz.Api.Model;

import java.util.List;

public class Response {
    private final String code;
    private final String description;
    private final List<Errors> errors;

    public Response(String code, String description, List<Errors> errors) {
        this.code = code;
        this.description = description;
        this.errors = errors;
    }

    public String getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }

    public List<Errors> getErrors() {
        return errors;
    }
}
