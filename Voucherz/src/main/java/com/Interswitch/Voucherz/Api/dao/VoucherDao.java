package com.Interswitch.Voucherz.Api.dao;

import com.Interswitch.Voucherz.Api.Model.Voucher;

import java.util.List;

public interface VoucherDao extends BaseDao<Voucher>{
    List<Voucher> retrieveByType(int voucherTypeId);
    Voucher retrieve(Long Id);
    Voucher retrieveByCode(String code);
    Voucher retrieveByEmail(String email);
}