//package com.interswitch.voucherzuser.repository;
//
//import com.interswitch.voucherzuser.api.Service.MerchantDetailsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
//
//    @Autowired
//    MerchantDetailsService merchantDetailsService;
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
//        return bCryptPasswordEncoder;
//    }
//
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
//
//        // Setting Service to find AppUser in the database.
//        // And Setting PassswordEncoder
//        auth.merchantDetailsService(merchantDetailsService).passwordEncoder(passwordEncoder());
//    }
//
//    @Override
//    protected void configure(HttpSecurity httpSecurity) throws Exception{
//        httpSecurity.csrf().disable();
//
//        //Pages that don't require login
//        httpSecurity.authorizeRequests().antMatchers("/", "/login", "/logout").permitAll();
//
//        // /userInfo page requires login as ROLE_USER or ROLE_ADMIN.
//        // If no login, it will redirect to /login page.
//        httpSecurity.authorizeRequests().antMatchers("/userInfo").access("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')");
//
//        // For ADMIN only.
//        httpSecurity.authorizeRequests().antMatchers("/admin").access("hasRole('ROLE_ADMIN')");
//
//        // When the user has logged into a page he does not have access to.
//        // AccessDeniedException will be thrown.
//        httpSecurity.authorizeRequests().and().exceptionHandling().accessDeniedPage("/403");
//
//        // Config for Login Form
//        httpSecurity.authorizeRequests().and().formLogin()//
//                // Submit URL of login page.
//                .loginProcessingUrl("/j_spring_security_check") // Submit URL
//                .loginPage("/login")//
//                .defaultSuccessUrl("/userAccountInfo")//
//                .failureUrl("/login?error=true")//
//                .usernameParameter("username")//
//                .passwordParameter("password")
//                // Config for Logout Page
//                .and().logout().logoutUrl("/logout").logoutSuccessUrl("/logoutSuccessful");
//    }
//}
