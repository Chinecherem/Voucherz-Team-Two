package com.interswitch.voucherzuser.api.dao.Impl;

import com.interswitch.voucherzuser.api.dao.UserRoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.List;

@Repository
@Transactional
public class UserRoleDaoImpl extends JdbcDaoSupport implements UserRoleDao {

    @Autowired
    public UserRoleDaoImpl(DataSource dataSource) {
        this.setDataSource(dataSource);
    }

    @Override
    public List<String> getRoleNames(Long userId){
        String roleQuery = "SELECT r.role_name" //
         + "FROM user_role ur, role r"//
        + "WHERE ur.role_Id = r.role_id AND ur.userId = ?";

        Object[] params = new Object[]{userId};

        List<String> roles = this.getJdbcTemplate().queryForList(roleQuery, params, String.class);
        return roles;
    }
}
