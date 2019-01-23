package com.interswitch.voucherzuser.api.dao.Impl;

import com.interswitch.voucherzuser.api.Model.ConfirmationToken;
import com.interswitch.voucherzuser.api.Model.CreateMerchantRequest;
import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.dao.ConfirmationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
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

    protected final String SINGLE_RESULT = "object";


    public void setDataSource(@Qualifier(value = "dataSource") DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);

        findByConfirmationToken = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_findByConfirmationToken")
                .returningResultSet(SINGLE_RESULT, new BeanPropertyRowMapper<>(ConfirmationToken.class));

    }
//    @Autowired
//    public ConfirmationToken findByConfimationToken(String confirmationToken){
//        SqlParameterSource in = new MapSqlParameterSource().addValue("confirmationToken", confirmationToken);
//        Map<String, Object> map = findByConfirmationToken.execute(in);
//        List<ConfirmationToken> list = (List<ConfirmationToken>) map.get(SINGLE_RESULT);
//        if (list == null || list.isEmpty()) {
//            return null;
//        }
//        return list.get(0);
   // }

    @Override
    public ConfirmationToken create(ConfirmationToken confirmationToken) {
        return confirmationToken;
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


}
