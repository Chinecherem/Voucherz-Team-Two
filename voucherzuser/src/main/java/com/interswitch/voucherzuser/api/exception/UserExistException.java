package com.interswitch.voucherzuser.api.exception;

public class UserExistException extends Exception{
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    private String code;

    public UserExistException(String message){
        super(message);
    }

    public UserExistException(String message, String code) {
        super(message);
        this.code = code;
    }
}
