package com.Interswitch.Voucherz.Api.Model;

import javax.validation.constraints.NotBlank;
import java.util.Date;

public class VoucherRequest {

    @NotBlank(message = "Required")
    private String voucherType;

    @NotBlank(message = "Required")
    private String category;

    private Date startDate;

    private Date expiryDate;

    private String charSet;

    private int length;

    private String prefix;
    private String suffix;


    private int NumOfCode;

    private Double codeValue;
    private String additionalInfo;

    public String getVoucherType() {
        return voucherType;
    }

    public void setVoucherType(String voucherType) {
        this.voucherType = voucherType;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getNumOfCode() {
        return NumOfCode;
    }

    public void setNumOfCode(int numOfCode) {
        NumOfCode = numOfCode;
    }

    public String getCharSet() {
        return charSet;
    }

    public void setCharSet(String charSet) {
        this.charSet = charSet;
    }

    public Double getCodeValue() {
        return codeValue;
    }

    public void setCodeValue(Double codeValue) {
        this.codeValue = codeValue;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }


}
