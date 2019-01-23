package com.interswitch.voucherzuser.api.Model;

import javax.annotation.Generated;
import java.util.Date;
import java.util.UUID;

public class ConfirmationToken {
    @Generated(value = "true")
    private long tokenId;
    private Date createdDate;
    private String confirmationToken;
    private Merchant merchant;

    public ConfirmationToken(Merchant merchant){
        this.merchant = merchant;
        createdDate = new Date();
        confirmationToken = UUID.randomUUID().toString();
    }

    public long getTokenId() {
        return tokenId;
    }

    public void setTokenId(long tokenId) {
        this.tokenId = tokenId;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getConfirmationToken() {
        return confirmationToken;
    }

    public void setConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }

    public Merchant getMerchant() {
        return merchant;
    }

    public void setMerchant(Merchant merchant) {
        this.merchant = merchant;
    }
}
