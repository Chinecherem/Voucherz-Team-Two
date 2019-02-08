package com.Interswitch.Voucherz.Api.dao;

import com.Interswitch.Voucherz.Api.Model.BaseEntity;
import com.Interswitch.Voucherz.Api.Utils.codeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public abstract class AbstractBaseDao<M extends BaseEntity> implements BaseDao<M>{
    protected JdbcTemplate jdbcTemplate;
    protected SimpleJdbcCall create, update, retrieve, retrieveAll, delete;

    protected final String SINGLE_RESULT = "object";
    protected final String MULTIPLE_RESULT = "list";
    protected static final String RESULT_COUNT = "count";


    public abstract void setDataSource(DataSource dataSource);

    public M create (M model) throws DataAccessException{
        SqlParameterSource sps = new BeanPropertySqlParameterSource(model);
        Map<String, Object> map = create.execute(sps);
        long id = (long)map.get("id");
        model.setId(id);
        return model;
    }

    public boolean update(M model) throws DataAccessException{
        SqlParameterSource sps = new BeanPropertySqlParameterSource(model);
        update.execute(sps);
        return true;
    }

    public boolean delete(M model){
        return false;
    }

//    public M retrieve(long id){
//        SqlParameterSource sps = new MapSqlParameterSource().addValue("id", id);
//        Map<String, Object>map = retrieve.execute(sps);
//        List<M> list = (List<M>)map.get(SINGLE_RESULT);
//        if (list == null || list.isEmpty()){
//            return null;
//        }
//        return list.get(0);
//    }

     public List<M> retrieveAll(){
        //SqlParameterSource sps = new BeanPropertySqlParameterSource();
        Map<String, Object> map = retrieveAll.execute();
        List<M> list = (List<M>)map.get(MULTIPLE_RESULT);
        if (list == null || list.isEmpty()){
            return null;
        }
        return list;
    }



}
