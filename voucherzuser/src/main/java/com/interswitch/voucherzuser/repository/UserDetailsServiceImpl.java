//package com.interswitch.voucherzuser.repository;
//
//import com.interswitch.voucherzuser.api.Model.AppUser;
//import com.interswitch.voucherzuser.api.dao.AppUserDao;
//import com.interswitch.voucherzuser.api.dao.UserRoleDao;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.passwordUtil.ArrayList;
//import java.passwordUtil.List;
//
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    @Autowired
//    private AppUserDao userDao;
//
//    @Autowired
//    private UserRoleDao userRoleDao;
//
//    @Override
//    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
//        AppUser appUser = this.userDao.findUserAccount(userName);
//        if (appUser == null){
//            System.out.println("User not Found" + userName);
//        }
//        System.out.println("Found User" + appUser);
//
//        //[ROLE_USER, ROLE_ADMIN]
//        List<String> roleNames = this.userRoleDao.getRoleNames(appUser.getUserId());
//
//        List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
//        if (roleNames != null){
//            for (String role : roleNames){
//                GrantedAuthority authority = new SimpleGrantedAuthority(role);
//                grantList.add(authority);
//
//            }
//        }
//        UserDetails userDetails = (UserDetails) new User(appUser.getUserName(), appUser.getPassword(), grantList);
//        return userDetails;
//
//    }
//}
