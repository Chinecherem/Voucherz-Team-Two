package com.interswitch.voucherzuser.api.dao;

import com.interswitch.voucherzuser.api.Model.LoginRequest;
import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.Model.Response;

public interface LoginDao {
    String login(String email, String password);
}
