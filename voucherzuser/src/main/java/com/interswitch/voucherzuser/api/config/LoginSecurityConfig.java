//package com.interswitch.voucherzuser.api.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class LoginSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder authenticationMgr) throws Exception {
//        authenticationMgr.inMemoryAuthentication()
//                .withUser("onyia.blessing2014@gmail.com").password("Divineble1").authorities("ROLE_ADMIN","ROLE_USER")
//                .and()
//                .withUser("onyiab4jesus@gmail.com").password("08134560770").authorities("ROLE_USER");
//    }
//
//    @Override
//    public void configure(HttpSecurity http) throws Exception{
//        http.authorizeRequests()
//                .antMatchers("/dashboard").access("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
//                .antMatchers("/user/register").access("hasRole('ROLE_USER')")
//                .antMatchers("/admin").access("hasRole('ROLE_ADMIN')")
//                .and()
//                .formLogin().loginPage("/login")
//                .defaultSuccessUrl("/homepage")
//                .failureUrl("/loginPage?error")
//                .usernameParameter("email").passwordParameter("password")
//                .and()
//                .logout().logoutSuccessUrl("/loginPage?logout");
//    }
//
//}
