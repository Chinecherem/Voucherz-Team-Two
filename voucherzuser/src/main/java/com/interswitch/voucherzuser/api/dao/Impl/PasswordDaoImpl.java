package com.interswitch.voucherzuser.api.dao.Impl;

import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.dao.PasswordDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;
import java.util.Map;

@Repository
public class PasswordDaoImpl implements PasswordDao {
    protected JdbcTemplate jdbcTemplate;

    protected SimpleJdbcCall findPassword;

    protected final String SINGLE_RESULT = "object";


    @Autowired
    public void setDataSource(@Qualifier(value = "dataSource") DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);

        findPassword = new SimpleJdbcCall(dataSource).withProcedureName("usp_findPassword").withReturnValue();
    }

    @Override
    public String findPassword(String email){
        SqlParameterSource parameterSource = new MapSqlParameterSource().addValue("email", email);
        Map<String, Object> map = findPassword.execute(parameterSource);
        String password = (String) map.get("password");
        if (password == null || password.isEmpty()) {
            return null;
        }
        return password;
    }
}
