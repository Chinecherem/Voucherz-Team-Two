package com.interswitch.voucherzuser.api.Model;

import javax.annotation.Generated;
import java.util.Date;
import java.util.UUID;

public class ConfirmationToken extends BaseEntity{
    @Generated(value = "true")
    private long tokenId;
    private Date createdDate;
    private String confirmationToken;
    private Merchant merchant;
    private Date expiryDate;

    public ConfirmationToken(Merchant merchant) {
       createdDate = new Date();
       confirmationToken = UUID.randomUUID().toString();
       this.merchant = merchant;
       expiryDate = new Date();
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

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    @Override
    public String toString() {
        return "ConfirmationToken{" +
                "tokenId=" + tokenId +
                ", createdDate=" + createdDate +
                ", confirmationToken='" + confirmationToken + '\'' +
                ", merchant=" + merchant +
                ", expiryDate=" + expiryDate +
                '}';
    }
}
