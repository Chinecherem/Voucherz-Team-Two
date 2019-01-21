package com.interswitch.voucherzuser.api.dao.Impl;

import com.interswitch.voucherzuser.api.Model.Merchant;
import com.interswitch.voucherzuser.api.dao.AbstractBaseDao;
import com.interswitch.voucherzuser.api.dao.MerchantDao;
import com.interswitch.voucherzuser.api.dao.util.RowCountMapper;
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
public class MerchantDaoImpl extends AbstractBaseDao<Merchant> implements MerchantDao {
    protected SimpleJdbcCall findByEmail;

    @Autowired
    @Override
    public void setDataSource(@Qualifier(value = "dataSource")DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        create = new SimpleJdbcCall(dataSource).withProcedureName("usp_createUsers").withReturnValue();
        update = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_updateUsers").withReturnValue();
        find = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_findMerchant")
                .returningResultSet(SINGLE_RESULT, new BeanPropertyRowMapper<>(Merchant.class));

        findAll = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_findAllMerchant").returningResultSet(RESULT_COUNT, new RowCountMapper())
                .returningResultSet(MULTIPLE_RESULT, new BeanPropertyRowMapper<>(Merchant.class));


        findByEmail = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_findMerchantByEmail")
                .returningResultSet(SINGLE_RESULT, new BeanPropertyRowMapper<>(Merchant.class));
    }

    @Override
    public Merchant findByEmail(String email) {
        SqlParameterSource parameterSource = new MapSqlParameterSource().addValue("email", email);
        Map<String, Object> map = findByEmail.execute(parameterSource);
        List<Merchant> list = (List<Merchant>) map.get(SINGLE_RESULT);
        if (list == null || list.isEmpty()) {
            return null;
        }
        return list.get(0);
    }


    @Override
    public Merchant find(long Id) {
        SqlParameterSource sps = new MapSqlParameterSource().addValue("Id", Id);
        Map<String, Object> map = find.execute(sps);
        List<Merchant> list = (List<Merchant>) map.get(SINGLE_RESULT);
        if (list == null || list.isEmpty()) {
            return null;
        }
        return list.get(0);
    }

    @Override
    public boolean delete(Merchant Model) {
        return false;
    }
}
