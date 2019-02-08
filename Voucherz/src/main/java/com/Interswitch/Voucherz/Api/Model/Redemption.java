package com.Interswitch.Voucherz.Api.Model;

import java.util.Date;

public class Redemption extends Voucher{
    private int redemptionQuantity;
    private Date redemptionDate;
    private String status;

    public int getRedemptionQuantity() {
        return redemptionQuantity;
    }

    public void setRedemptionQuantity(int redemptionQuantity) {
        this.redemptionQuantity = redemptionQuantity;
    }

    public Date getRedemptionDate() {
        return redemptionDate;
    }

    public void setRedemptionDate(Date redemptionDate) {
        this.redemptionDate = redemptionDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Redemption{" +
                "redemptionQuantity=" + redemptionQuantity +
                ", redemptionDate=" + redemptionDate +
                ", status='" + status + '\'' +
                '}';
    }
}
