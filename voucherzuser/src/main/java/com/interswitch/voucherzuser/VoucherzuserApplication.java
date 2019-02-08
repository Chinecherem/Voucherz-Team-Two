package com.interswitch.voucherzuser;

import com.interswitch.voucherzuser.api.Service.MerchantServiceFeignClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
//import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

//@EnableFeignClients()
//@ComponentScan(basePackageClasses = MerchantServiceFeignClient.class)
@EnableDiscoveryClient
@SpringBootApplication
public class VoucherzuserApplication {

	public static void main(String[] args){
		SpringApplication.run(VoucherzuserApplication.class, args);
	}

}

//@Configuration
//class Config{
//
//	@LoadBalanced
//	@Bean
//	public RestTemplate restTemplate(){
//		return new RestTemplate();
//	}
//
//}




