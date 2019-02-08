package com.interswitch.voucherzuser.api.dao.Impl;

import com.interswitch.voucherzuser.api.Model.ConfirmationToken;
import com.interswitch.voucherzuser.api.Model.PasswordReset;
import com.interswitch.voucherzuser.api.dao.PasswordResetDao;
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
public class PasswordResetDaoImpl implements PasswordResetDao {
    protected JdbcTemplate jdbcTemplate;

    protected SimpleJdbcCall resetPassword;

    protected final String SINGLE_RESULT = "object";


    @Autowired
    public void setDataSource(@Qualifier(value = "dataSource") DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);

        resetPassword = new SimpleJdbcCall(dataSource).withProcedureName("usp_updatePassword").withReturnValue();
    }

    @Override
    public PasswordReset resetPassword(String email, String password) {
        SqlParameterSource parameterSource = new MapSqlParameterSource().addValue("email", email)
                .addValue("password", password);
        Map<String, Object> map = resetPassword.execute(parameterSource);
        List<PasswordReset> list = (List<PasswordReset>) map.get(SINGLE_RESULT);
        if (list == null || list.isEmpty()) {
            return null;
        }

        return list.get(0);

    }

}
