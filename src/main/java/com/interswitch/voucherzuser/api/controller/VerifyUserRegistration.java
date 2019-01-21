//package com.interswitch.voucherzuser.api.controller;
//
//import com.interswitch.voucherzuser.api.Model.Merchant;
//import org.apache.catalina.User;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.validation.Errors;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.context.request.WebRequest;
//import org.springframework.web.servlet.ModelAndView;
//
//import javax.validation.Valid;
//
//@RestController
//@RequestMapping("/merchant/registration")
//public class VerifyUserRegistration{
//    public String showRegistrationForm(WebRequest request, Model model){
//        Merchant merchant = new Merchant();
//        model.addAttribute("user", merchant);
//        return "Registration";
//    }
//
//    public ModelAndView registerUserAccount(@ModelAttribute("user") @Valid Merchant userAccount, BindingResult result,
//                                            WebRequest request, Errors errors){
//        User registered = new User();
//    }
//
//
//
//
//}
