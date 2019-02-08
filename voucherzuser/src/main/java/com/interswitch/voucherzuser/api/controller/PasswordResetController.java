package com.interswitch.voucherzuser.api.controller;

import com.interswitch.voucherzuser.api.Model.Error;
import com.interswitch.voucherzuser.api.Model.PasswordReset;
import com.interswitch.voucherzuser.api.Model.PasswordResetRequest;
import com.interswitch.voucherzuser.api.Model.Response;
import com.interswitch.voucherzuser.api.Service.PasswordResetService;
import com.interswitch.voucherzuser.api.exception.UserNotFoundException;
import com.interswitch.voucherzuser.api.util.EncryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/user/password")
@CrossOrigin("*")
public class PasswordResetController {

    @Autowired
    private PasswordResetService passwordResetService;

    private PasswordReset passwordReset;

    private EncryptPassword encryptPassword;

    @RequestMapping(value = "/reset/{email}", method = RequestMethod.PUT)
    public Response resetPassword(@PathVariable("email") String email, @RequestBody @Validated final PasswordResetRequest passwordResetRequest)
    throws UserNotFoundException {
        PasswordReset passwordReset = new PasswordReset();
        if (email == null) {
            throw new UserNotFoundException("Email doesn't exit");
        }
        String newPassword = passwordResetRequest.getNewPassword();
     //   passwordReset.setNewPassword(newPassword);

        System.out.println(passwordReset.getNewPassword());
        System.out.println("New password: "+newPassword);

        String newPasswordConfirm = passwordResetRequest.getConfirmNewPassword();
        System.out.println("Confirm password: "+newPasswordConfirm);
            if (!newPassword.equals(newPasswordConfirm)) {
                ArrayList<Error> errors = new ArrayList<>();
                errors.add(new Error("Password Mismatch", "Password does not match ConfirmPassword"));
                return new Response("400","Password and Confirm Password doesn't match",errors);
            }

            passwordReset.setNewPassword(BCrypt.hashpw(newPassword, BCrypt.gensalt(4)));
            passwordResetService.resetUserPassword(email, BCrypt.hashpw(newPassword, BCrypt.gensalt(4)));
            return new Response("200", "Password reset Successful", null);
        }

    }

