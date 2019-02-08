package com.Interswitch.Voucherz.Api.Utils;

import org.junit.Test;

import java.util.Random;

import static org.assertj.core.api.Assertions.assertThat;

public class CodeUtilTest {
    @Test
    public void TestRandomAlphabet() {
        int numOfCode = 5;
        for (int i = 0; i < numOfCode; i++) {
            assertThat(codeUtil.randomAlphabet(10)).hasSize(10);
        }
    }

    @Test
    public void TestRandomAlphaNumeric(){
        assertThat(codeUtil.randomAlphaNumeric(20)).hasSize(20);
    }

    @Test
    public void TestRandomInteger() {
        int numOfCode = 5;
        for (int i = 0; i < numOfCode; i++) {
            assertThat(codeUtil.randomInteger(10)).hasSize(10);
       }
    }


}
