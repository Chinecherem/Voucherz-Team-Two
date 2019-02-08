package com.Interswitch.Voucherz.Api.Services;

import com.Interswitch.Voucherz.Api.Model.Voucher;
import com.Interswitch.Voucherz.Api.Model.VoucherRequest;

import java.util.List;

public interface VoucherService {
    public Voucher createVoucher(VoucherRequest voucherRequest, String email);
    public Voucher updateVoucher(Voucher voucher);
    public Voucher retrieveVoucher(long id);
    public List<Voucher> retrieveByType(int voucherTypeId);
    public List<Voucher> retrieveAllVoucher();
    public Voucher retrieveVoucherByCode(String code);
    public Voucher retrieveVoucherByMerchant(String email);
}
