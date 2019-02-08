package com.Interswitch.Voucherz.Api.Model;

public class SessionResponse {
    private String token;
    private String email;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "SessionResponse{" +
                "token='" + token + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
