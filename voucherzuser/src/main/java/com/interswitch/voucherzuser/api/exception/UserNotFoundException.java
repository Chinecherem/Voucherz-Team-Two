package com.interswitch.voucherzuser.api.exception;

public class UserNotFoundException extends Exception {
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    private String code;

    public UserNotFoundException(String message){

        super(message);
    }

    public UserNotFoundException(String message, String code) {
        super(message);
        this.code = code;
    }
}
