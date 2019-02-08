package com.Interswitch.Voucherz.Api.Utils;

import java.security.SecureRandom;
import java.util.Random;

public class codeUtil {
    static final String codeSource = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";

    //Method to Generate random alphabetical code
    public static String randomAlphabet(int codeLength){
        String code = "";
        StringBuilder stringBuilder = new StringBuilder(codeLength);
        for (int i = 0; i < codeLength; i++){
            int character = (int)(Math.random()*codeSource.length());
         stringBuilder.append(codeSource.charAt(character));

        }
        code += stringBuilder.toString();
        System.out.println(code);
        return code;

    }

    //Method to Generate Random Alphanumeric code
    private static final String alphaNumString = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";
    static SecureRandom secureRnd = new SecureRandom();
    public static String randomAlphaNumeric(int count) {
        String code = "";
        StringBuilder builder = new StringBuilder();
        for(int i = 0; i < count; i++) {
            builder.append(alphaNumString.charAt(secureRnd.nextInt(alphaNumString.length())));
        }
        code += builder.toString();
        //System.out.println(code);
        return code;
    }

    //Method to Generate Random Integers
    private static final String numString = "0123456789";
    static SecureRandom secureRandom = new SecureRandom();
    public static String randomInteger(int size){
        String code = "";
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < size; i++){
            builder.append(numString.charAt(secureRnd.nextInt(numString.length())));
        }
        code += builder.toString();
       // System.out.println(code);
        return code;

    }


}
