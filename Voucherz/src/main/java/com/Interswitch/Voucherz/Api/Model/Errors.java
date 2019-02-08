package com.Interswitch.Voucherz.Api.Model;

public class Errors {
    private final String field;
    private final String message;

    public Errors(String field, String message) {
        this.field = field;
        this.message = message;
    }

    public String getField() {
        return field;
    }

    public String getMessage() {
        return message;
    }
}
