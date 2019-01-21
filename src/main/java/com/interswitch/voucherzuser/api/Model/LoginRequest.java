package com.interswitch.voucherzuser.api.Model;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class LoginRequest {
    @Email
    @NotBlank(message = "Required")
    @Length(min = 10, max = 50)
    private String email;

    @NotBlank(message = "Required")
    @Length(min = 3, max = 8)
    @Pattern(regexp = "^(?=[^\\d_].*?\\d)\\w(\\w|[!@#$%]){4,20}", message = "Password must be of length 3 to 8 alphanumeric characters. Should not start with a digit, underscore or special character but must contain at least one digit.")
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
