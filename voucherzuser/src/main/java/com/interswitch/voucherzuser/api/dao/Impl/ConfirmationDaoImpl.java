package com.interswitch.voucherzuser.api.dao.Impl;

import com.interswitch.voucherzuser.api.Model.ConfirmationToken;
import com.interswitch.voucherzuser.api.Model.CreateMerchantRequest;
import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.dao.ConfirmationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;
import java.util.Map;

@Repository
public class ConfirmationDaoImpl implements ConfirmationDao {

    protected JdbcTemplate jdbcTemplate;

    protected SimpleJdbcCall findByConfirmationToken;

    protected SimpleJdbcCall create;

    protected final String SINGLE_RESULT = "object";



    @Autowired
    public void setDataSource(@Qualifier(value = "dataSource") DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);

        create = new SimpleJdbcCall(dataSource).withProcedureName("usp_createConfirmationToken").withReturnValue();
        findByConfirmationToken = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_findByConfirmationToken")
                .returningResultSet(SINGLE_RESULT, new BeanPropertyRowMapper<>(ConfirmationToken.class));

    }

    @Override
    public ConfirmationToken findByConfirmationToken(String confirmationToken) {
        SqlParameterSource in = new MapSqlParameterSource().addValue("confirmationToken", confirmationToken);
        Map<String, Object> map = findByConfirmationToken.execute(in);
        List<ConfirmationToken> list = (List<ConfirmationToken>) map.get(SINGLE_RESULT);
        if (list == null || list.isEmpty()) {
            return null;
        }
        return list.get(0);
    }
    @Override
    public ConfirmationToken create(ConfirmationToken confirmToken){
      SqlParameterSource in = new BeanPropertySqlParameterSource(confirmToken);
      Map<String, Object> map = create.execute(in);
      long tokenId = (long)map.get("tokenId");
        confirmToken.setId(tokenId);
        return confirmToken;
    }



}
