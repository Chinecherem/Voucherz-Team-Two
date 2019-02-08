package com.interswitch.voucherzuser.api.Model;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class PasswordResetRequest {

    @NotBlank(message = "Paasword is Required")
    @Length(min = 3, max = 8)
    @Pattern(regexp = "^(?=[^\\d_].*?\\d)\\w(\\w|[!@#$%]){4,20}", message = "Password must be of length 3 to 8 alphanumeric characters. Should not start with a digit, underscore or special character but must contain at least one digit.")
    private String newPassword;

    @NotBlank
    private String confirmNewPassword;


    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getConfirmNewPassword() {
        return confirmNewPassword;
    }

    public void setConfirmNewPassword(String confirmNewPassword) {
        this.confirmNewPassword = confirmNewPassword;
    }

    @Override
    public String toString() {
        return "PasswordResetRequest{" +
                ", newPassword='" + newPassword + '\'' +
                ", confirmNewPassword='" + confirmNewPassword + '\'' +
                '}';
    }
}
