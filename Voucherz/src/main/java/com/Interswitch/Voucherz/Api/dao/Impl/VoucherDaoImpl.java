package com.Interswitch.Voucherz.Api.dao.Impl;

import com.Interswitch.Voucherz.Api.Model.Voucher;
import com.Interswitch.Voucherz.Api.dao.AbstractBaseDao;
import com.Interswitch.Voucherz.Api.dao.VoucherDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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
public class VoucherDaoImpl extends AbstractBaseDao<Voucher> implements VoucherDao {
    protected SimpleJdbcCall retrieveByType;
    protected SimpleJdbcCall retrieveByCode;
    protected SimpleJdbcCall retrieveByEmail;

    @Autowired
    @Override
    public void setDataSource(@Qualifier(value = "dataSource")DataSource dataSource){
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        create = new SimpleJdbcCall(dataSource).withProcedureName("usp_createVoucher").withReturnValue();
        update = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_updateVoucher").withReturnValue();
        retrieve = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_retriveVoucher")
                .returningResultSet(SINGLE_RESULT, new BeanPropertyRowMapper<>(Voucher.class));
        retrieveAll = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_retriveAllVoucher").returningResultSet(MULTIPLE_RESULT, new BeanPropertyRowMapper<>(Voucher.class));
        retrieveByType = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_retriveVoucherByType").returningResultSet(MULTIPLE_RESULT, new BeanPropertyRowMapper<>(Voucher.class));
        retrieveByCode = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_retriveVoucherByCode").returningResultSet(SINGLE_RESULT,
                new BeanPropertyRowMapper<>(Voucher.class));
        retrieveByEmail = new SimpleJdbcCall(jdbcTemplate).withProcedureName("usp_retrieveVoucherByMerchant")
                .returningResultSet(SINGLE_RESULT, new BeanPropertyRowMapper<>(Voucher.class));
    }

    @Override
    public List<Voucher> retrieveByType(int voucherTypeId) {
        SqlParameterSource ps = new MapSqlParameterSource().addValue("voucherTypeId", voucherTypeId);
        Map<String, Object> map = retrieveByType.execute(ps);
        List<Voucher> list = (List<Voucher>) map.get(MULTIPLE_RESULT);
        if (list == null || list.isEmpty()) {
            return null;
        }
        return list;
    }


//    @Override
//    public Voucher retrieve(long Id){
//        SqlParameterSource ps = new MapSqlParameterSource().addValue("Id", Id);
//        Map<String, Object> map = retrieve.execute(ps);
//        List<Voucher>list = (List<Voucher>)map.get(SINGLE_RESULT);
//        if (list == null || list.isEmpty()){
//            return null;
//        }
//        return list.get(0);
//    }

    @Override
    public Voucher retrieveByCode(String code) {
        SqlParameterSource parameterSource = new MapSqlParameterSource().addValue("code",code);
        Map<String, Object> map = retrieveByCode.execute(parameterSource);
        List<Voucher> list = (List<Voucher>)map.get(SINGLE_RESULT);
        if (list == null || list.isEmpty()){
            return null;
        }
        return list.get(0);
    }

    @Override
    public Voucher retrieveByEmail(String email) {
        SqlParameterSource parameterSource = new MapSqlParameterSource().addValue("email",email);
        Map<String, Object> map = retrieveByEmail.execute(parameterSource);
        List<Voucher> list = (List<Voucher>)map.get(SINGLE_RESULT);
        if (list == null || list.isEmpty()) {
            return null;
        }
        return list.get(0);
    }

    @Override
    public Voucher Update(Voucher voucher) {
        SqlParameterSource sps = new BeanPropertySqlParameterSource(voucher);
        Map<String, Object> map = update.execute(sps);
        Long Id = (Long) map.get("id");
        voucher.setId(Id);
        return voucher;
    }

    @Override
    public Voucher retrieve(Long id) {
        SqlParameterSource ps = new MapSqlParameterSource().addValue("id", id);
        Map<String, Object> map = retrieve.execute(ps);
        List<Voucher>list = (List<Voucher>)map.get(SINGLE_RESULT);
        if (list == null || list.isEmpty()){
            return null;
        }
        return list.get(0);
    }


}
