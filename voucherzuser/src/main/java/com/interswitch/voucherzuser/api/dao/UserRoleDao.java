package com.interswitch.voucherzuser.api.dao;

import java.util.List;

public interface UserRoleDao {
    public List<String> getRoleNames(Long id);
}
