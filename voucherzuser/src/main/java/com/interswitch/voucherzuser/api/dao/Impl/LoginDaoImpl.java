package com.interswitch.voucherzuser.api.dao.Impl;
//
//import com.interswitch.voucherzuser.api.Model.LoginRequest;
//import com.interswitch.voucherzuser.api.Model.Merchant;
//import com.interswitch.voucherzuser.api.Model.Response;
//import com.interswitch.voucherzuser.api.dao.LoginDao;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
//import org.springframework.jdbc.core.namedparam.SqlParameterSource;
//import org.springframework.jdbc.core.simple.SimpleJdbcCall;
//import org.springframework.stereotype.Repository;
//
//import javax.sql.DataSource;
//import java.util.List;
//import java.util.Map;
//
//@Repository
//public class LoginDaoImpl implements LoginDao {
//
//        protected JdbcTemplate jdbcTemplate;
//
//        protected SimpleJdbcCall login;
//
//        protected final String SINGLE_RESULT = "object";
//
//
//        @Autowired
//        public void setDataSource(@Qualifier(value = "dataSource") DataSource dataSource) {
//            this.jdbcTemplate = new JdbcTemplate(dataSource);
//
//            login = new SimpleJdbcCall(dataSource).withProcedureName("usp_userLogin").withReturnValue();
//        }
//
//        @Override
//        public Merchant login(String email, String password){
//            SqlParameterSource in = new MapSqlParameterSource().addValue("email", email)
//                    .addValue("password", password);
//            Map<String, Object> map = login.execute(in);
//            List<String> list = (List<String>) map.get(SINGLE_RESULT);
//            if (list == null || list.isEmpty()) {
//                return "Email or Password not Found";
//            }
//            return list.get(0);
//
//        }
//
//    }
