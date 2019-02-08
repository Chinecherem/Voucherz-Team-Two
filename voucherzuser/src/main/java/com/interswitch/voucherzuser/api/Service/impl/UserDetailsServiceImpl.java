//package com.interswitch.voucherzuser.api.Service.impl;
//
//import com.interswitch.voucherzuser.api.Model.Merchant;
//import com.interswitch.voucherzuser.api.dao.MerchantDao;
//import com.interswitch.voucherzuser.api.exception.UserNotFoundException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.security.core.userdetails.User;
//
//import java.passwordUtil.ArrayList;
//import java.passwordUtil.List;
//
//@Service
//@Transactional
//public class UserDetailsServiceImpl implements UserDetailsService {
//    @Autowired
//    private MerchantDao merchantDao;
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        Merchant merchant = merchantDao.findByEmail(email);
//        if (merchant == null){
//            throw new UsernameNotFoundException("No user Found with Username: " +email);
//        }
//        boolean enabled = true;
//        boolean accountNonExpired = true;
//        boolean credentialsNonExpired = true;
//        boolean accountNonLocked = true;
//
//        return  new org.springframework.security.core.userdetails.User
//                (merchant.getEmail(),
//                        merchant.getPassword().toLowerCase(), enabled, accountNonExpired,
//                        credentialsNonExpired, accountNonLocked,
//                        getAuthorities(merchant.getRoles()));
//
//    }
//
//    private static List<GrantedAuthority> getAuthorities (List<String> roles) {
//        List<GrantedAuthority> authorities = new ArrayList<>();
//        for (String role : roles) {
//            authorities.add(new SimpleGrantedAuthority(role));
//        }
//        return authorities;
//    }
//}
